package com.cadastro.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="cliente")
public class Cliente {
    
	@Id
    @GeneratedValue(strategy = GenerationType. IDENTITY)
	private long id;
	@Column (name = "nome", nullable = false)
	private String nome;
	@Column (name = "cpf", nullable = false)
	private String cpf;
	@Column (name = "rua", nullable = false)
	private String rua;
	@Column (name ="uf", nullable = false )
	private String uf;
	@Column (name = "email", nullable = false)
	private String email;
	@Column (name = "senha", nullable = false)
	private String senha;
}

