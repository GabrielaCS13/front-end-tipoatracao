import React, { useState } from 'react'; // Importe o React e useState
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup, Col, Row } from 'reactstrap';
import axios from 'axios';
import { Nav, NavItem, NavLink, Form, FormGroup, Input, Label } from 'reactstrap';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header ">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="bootstrap-4.0.0-dist/css/bootstrap-grid.css"></link>

        <body class="col-12">
          <div class="container-fluid">
            <div class="row flex-nowrap">
              <div class="menulateral col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">


                <div style={{ width: 100, height: 100, left: 80, top: 130, borderRadius: '50px', position: 'absolute', border: '2px white solid' }} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <hr class="hr"></hr>

                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                  <a href="/" class="d-flex align-items-center pb-5 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline px-2">Rodrigo Favaro</span>
                  </a>


                  <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                    <li class="w-100">
                    
                      <a href="#" class="nav-link px-2 fs-6"> <div><img className="Image57" style={{ width: 18, height: 16 }} src="imgusuario.png" /><span class="d-none d-sm-inline"> Usuarios</span></div></a>
                    </li>
                    <li>
                      <a href="#" class="nav-link px-2"> <div><img className="Image57" style={{ width: 18, height: 16 }} src="imgponto.png" /><span class="d-none d-sm-inline"> Ponto Turístico</span></div></a>
                    </li>

                    <li>
                      <a href="#" class="nav-link px-2"> <div><img className="Image57" style={{ width: 18, height: 16 }} src="imgevento.png" /><span class="d-none d-sm-inline"> Eventos</span></div></a>
                    </li>

                    <li>
                      <a href="#" class="nav-link px-2"> <div><img className="Image57" style={{ width: 18, height: 16 }} src="imgatracao.png" /><span class="d-none d-sm-inline"> Atrações</span></div></a>
                    </li>

                    <li>
                      <a href="#" class="nav-link px-2"> <div><img className="Image57" style={{ width: 18, height: 16 }} src="imgnoticia.png" /><span class="d-none d-sm-inline"> Notícias</span></div></a>
                    </li>
                    <li>
                      <a href="#" class="nav-link px-2"> <div><img className="Image57" style={{ width: 18, height: 16 }} src="imgDashboard.png" /><span class="d-none d-sm-inline"> Dashboard</span></div></a>
                    </li>

                  </ul>



                  <hr></hr>

                  <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"></img>
                      <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                      <li><a class="dropdown-item" href="#">New project...</a></li>
                      <li><a class="dropdown-item" href="#">Settings</a></li>
                      <li><a class="dropdown-item" href="#">Profile</a></li>
                      <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col py-3">

                <div class="nav">

                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <a class="itemacessibi nav-link active m-1" aria-current="page" href="#"><img className="Image57" style={{ width: 29.50, height: 29.50 }} src="imgTema.png" /></a>
                    </li>
                    <li class="nav-item">
                      <a class="itemacessibi nav-link active m-1" aria-current="page" href="#"><img className="Image57" style={{ width: 29.50, height: 29.50 }} src="imgDaltonico.png" /></a>
                    </li>
                    <li class="nav-item">
                      <a style={{ width: 61.5, height: 45.5 }} class="itemacessibi nav-link active m-1" aria-current="page" href="#"><img src="imgAumLetra.png" style={{ fontSize: 40, paddingBlockEnd: 100, paddingright: 20 }} /></a>
                    </li>
                    <li class="nav-item">
                      <a class="itemacessibi nav-link active m-1" aria-current="page" href="#"><img src="imgDimLetra.png" /></a>
                    </li>
                  </ul>

                  <Col className="text-end">
                    <img
                      style={{ width: 168.78, height: 33, left: 1271, top: 39 }}
                      src="logoComtur.png"
                    />
                  </Col>
                </div>

                <br></br>
                <div>
                  <div style={{ width: 242, height: 37, left: 350, top: 153, position: 'absolute', color: 'black', fontSize: 40, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Cadastro</div>
                  <hr></hr>
                  <br></br>
                  <div style={{ width: 219, height: 37, left: 400, top: 249, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Mulish', fontWeight: '600', wordWrap: 'break-word' }}>Atração</div>

                </div>

                <div style={{ paddingTop: '200px'}}>
                  <Form>
                    <CardGroup>
                      <Col md={4} >
                        <FormGroup >
                          <Label for="nome">
                            Nome
                          </Label>
                          <Input
                            id="nome"
                            name="nome"
                            type="text"
                          />
                        </FormGroup>
                      </Col><div class="teste"></div>

                      <Col md={4}>
                        <FormGroup>
                          <Label for="tipo">
                            Tipo
                          </Label>
                          <Input
                            id="tipo"
                            name="tipo"
                            type="select"
                          >
                            <option>
                              1
                            </option>
                            <option>
                              2
                            </option>

                          </Input>
                        </FormGroup>
                      </Col>

                      <button class="bttipotirismo teste m-1">
                        <img src="lupa1.png" />
                      </button>

                      <button class="bttipotirismo teste m-1">
                        <img src="img+.png" />
                      </button>
                    </CardGroup>

                    <CardGroup>
                      <Col md={4} >
                        <FormGroup>
                          <Label for="descricao">
                            Descriçâo
                          </Label>
                          <Input
                            id="descricao"
                            name="descricao"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <div class="teste"></div>

                      <div style={{width: '40%'}} >
                      <Card
                        body
                        
                      >
                        <Col md={12}>
                        <FormGroup>
                          <Label for="tipoturismo">
                            Tipo Turismo
                          </Label>
                          <Input
                            id="tipoturismo"
                            name="file"
                            type="file"
                          />
                          
                        </FormGroup>
                        </Col>
                      </Card>
                      </div>

                    </CardGroup>
                  </Form>



                </div>

                <div class="nav ">
                  <Col className="text-end">
                    <button className="btncancelar m-1">
                      Cancelar
                    </button>

                    <button className="btnsalvar m-1">
                      Salvar
                    </button>
                  </Col>
                </div>
              </div>
            </div>
          </div>
        </body>
      </header>
    </div>
  );
}

export default App;