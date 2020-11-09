import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../';

// configure chai
chai.use(chaiHttp);
chai.should();

describe("DiaryEntry", () => {
    describe("GET /", () => {
        // test get all diary entries
        it("should get all diary entries", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                })
        })


    })
})