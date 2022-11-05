package com.cadastro.serviceImpl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.exception.ResourceNotFoundException;
import com.cadastro.model.Cliente;
import com.cadastro.repositories.ClienteRepository;

import com.cadastro.service.ClienteService;
@Service
public class ClienteServiceImpl implements ClienteService {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Override
    public Cliente saveCliente (Cliente cliente) {
    	return clienteRepository.save(cliente);
    }
    
	@Override
	public List<Cliente> getAllClientes(){
		return clienteRepository.findAll();
		
	}
	
	@Override
	public Cliente getClienteById(long id) {
		return clienteRepository.findById (id).orElseThrow (() -> new ResourceNotFoundException("Clientes", "id", id));
	    
	
	}
	
	@Override
	public Cliente updateCliente (Cliente cliente, long id) {
		
		Cliente existingCliente = clienteRepository.findById(id).orElseThrow(
			() -> new ResourceNotFoundException ("Cliente", "id", id));
	
	       existingCliente.setNome(cliente.getNome());
	       existingCliente.setCpf(cliente.getCpf());
	       existingCliente.setRua(cliente.getRua());
	       existingCliente.setUf(cliente.getRua());
	       existingCliente.setEmail(cliente.getEmail());
	       existingCliente.setSenha(cliente.getSenha());
	       
	       clienteRepository.save(existingCliente);
	       return existingCliente;
	       
	       }
	
	@Override
	public void deleteCliente(long id) {
		clienteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Cliente", "id",id));
	    
		clienteRepository.deleteById(id);
	}

}