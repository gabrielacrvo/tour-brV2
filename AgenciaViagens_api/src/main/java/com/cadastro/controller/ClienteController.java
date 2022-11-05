package com.cadastro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cadastro.model.Cliente;
import com.cadastro.serviceImpl.ClienteServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("api/clientes")
public class ClienteController {


		@Autowired
		private ClienteServiceImpl service;
		
		//REQUEST TESTE
		@GetMapping("/home")
		public String hello() { 
			return "oi";
		}
		
		// REQUEST DE LISTAGEM
		//localhost:8080/api/clientes
		@GetMapping
		public ResponseEntity<List<Cliente>> findAll() { 
			List<Cliente> clientes = service.getAllClientes();
			return ResponseEntity.ok().body(clientes);
		}
		
		// REQUEST POR ID
		//localhost:8080/api/clientes/1
		@GetMapping("{id}")
		public ResponseEntity<Cliente> getFuncionarioById(@PathVariable("id") long ClienteId) { 
			return new ResponseEntity<Cliente>(service.getClienteById(ClienteId), HttpStatus.OK);
		}
		
		//REQUEST PARA SALVAR
		//localhost:8080/api/clientes
		@PostMapping
		public ResponseEntity<Cliente> saveCliente(@RequestBody Cliente cliente){
			return new ResponseEntity<Cliente>(service.saveCliente(cliente), HttpStatus.CREATED);
		}
		
		//REQUEST PARA ATUALIZAR
		//localhost:8080/api/clientes/1
		@PutMapping("{id}")
		public ResponseEntity<Cliente> updateFuncionario(@PathVariable("id") long id, 
				@RequestBody Cliente cliente){
			return new ResponseEntity<Cliente>(service.updateCliente(cliente, id), HttpStatus.OK);
		}
		
		//REQUEST PARA DELETAR
		@DeleteMapping("{id}")
		public ResponseEntity<String> deleteCliente(@PathVariable("id") long id){
			service.deleteCliente(id);
			
			return new ResponseEntity<String>("Cliente deletado com sucesso.", 
					HttpStatus.OK);
		}
		
	}

