package com.sesi.imc.calculator.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sesi.imc.calculator.model.Pessoa;

public interface PessoaRepository extends JpaRepository <Pessoa, Long>{
	
}
