let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index');

// configure chai
chai.use(chaiHttp);
chai.should();

// route
const route = "/api/diary";

describe("DiaryEntry", () => {
    describe("GET", () => {
        // individual test
        it("should get all diary entries", (done) => {
            chai.request(app)
                .get(route)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property("status", "success");
                    res.body.should.have.property("message", "entries retrieved successfully");
                    done();
                });
        });
    });

    describe("POST, PUT, DELETE", () => {
        let _id = "";

        describe("POST", () => {
            it("should create diary entry", (done) => {
                chai.request(app)
                    .post(route)
                    .set("content-type", "application/x-www-form-urlencoded")
                    .send({ weather: "sunny", message: "great day today" })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property("status", "success");
                        res.body.should.have.property("message", "new entry created!");

                        _id = res.body.data._id;

                        done();
                    });
            });

            it("should not create diary entry", (done) => {
                chai.request(app)
                    .post(route)
                    .set("content-type", "application/x-www-form-urlencoded")
                    .send({ message: "great day today" })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property("status", "error");
                        done();
                    });
            });
        });

        describe("PUT", () => {
            it("should update diary entry", (done) => {
                chai.request(app)
                    .put(`${route}/${_id}`)
                    .set("content-type", "application/x-www-form-urlencoded")
                    .send({ weather: "sunny", message: "hello" })
                    .end((err, res) => {
                        // console.log(res);
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property("status", "success");
                        res.body.should.have.property("message", "diary entry updated!");
                        done();
                    });
            });

            it("should not update diary entry", (done) => {
                chai.request(app)
                    .put(`${route}/${_id}`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property("status", "error");
                        res.body.should.have.property("message", "at least one field needs to be changed");
                        done();
                    });
            });
        });

        describe("DELETE", () => {
            it("should delete diary entry", (done) => {
                chai.request(app)
                    .delete(`${route}/${_id}`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property("status", "success");
                        res.body.should.have.property("message", "entry deleted");
                        done();
                    });
            });
        });
    });
});
