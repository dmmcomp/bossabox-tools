
const request = require('supertest');

const mongoose = require('mongoose');
var Mockgoose = require('mock-mongoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);
const app = require('../../index');

const tool = {
    title: "nodejs",
    link: "http://nodejs.com",
    description: "back end api using javascript",
    tags: ['node','javascript']
    
}

beforeAll( async (done) => {
    mockgoose.prepareStorage().then(async function() {
        await mongoose.connect('mongodb://localhost:27017/vuttr', function(err) {
            done(err);
        });
    });
});


describe('Tool', () => {
    it('sucesso ao tentar cadastrar uma nova ferramenta', async (done) => {
        const response = await request(app).post("/tools").send(tool);
        const responseTool = (({title,link,description,tags}) => ({title,link,description,tags}))(response.body);
        expect(response.status).toBe(201);
        expect(responseTool).toEqual(tool);
        done();
    });

    it('sucesso ao listar todas as ferramentas cadastradas', async (done) => {
        const response = await request(app).get("/tools");
        const ExpectedArrayTool = [tool];
        const toolArray = response.body.map((tool,index) => {
            let filteredTool = (({title,link,description,tags}) => ({title,link,description,tags}))(tool);
            return filteredTool;
        })
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
        expect(toolArray).toStrictEqual(ExpectedArrayTool);
        done();
    });

    it('sucesso ao pesquisar ferramentas por tag', async (done) => {
        const response = await request(app).get("/tools?tag=node");
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
        done();
    })

    it('sucesso ao remover ferramenta por Id', async (done) => {
        const toolToRemove = await request(app).get("/tools?tag=node");
        const response = await request(app).delete(`/tools/${toolToRemove.body[0]._id}`);
        expect(response.status).toBe(204);
        done();
    })
})