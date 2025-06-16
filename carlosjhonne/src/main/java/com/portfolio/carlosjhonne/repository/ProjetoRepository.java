package com.portfolio.carlosjhonne.repository;

import com.portfolio.carlosjhonne.model.Projeto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjetoRepository extends JpaRepository<Projeto, Long> {

    List<Projeto> findByAtivoTrueOrderByDestaqueDescDataCriacaoDesc();

    Page<Projeto> findByNomeContainingIgnoreCase(String nome, Pageable pageable);
}