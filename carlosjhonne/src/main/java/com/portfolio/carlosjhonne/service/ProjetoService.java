package com.portfolio.carlosjhonne.service;

import com.portfolio.carlosjhonne.model.Projeto;
import com.portfolio.carlosjhonne.repository.ProjetoRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjetoService {

    private final ProjetoRepository repository;

    public ProjetoService(ProjetoRepository repository) {
        this.repository = repository;
    }

    public List<Projeto> listarTodos() {
        return repository.findByAtivoTrueOrderByDestaqueDescDataCriacaoDesc();
    }

    public List<Projeto> listarTodosAdmin() {
        return repository.findAll();
    }

    public Optional<Projeto> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public Projeto salvar(Projeto projeto) {
        return repository.save(projeto);
    }

    public void excluir(Long id) {
        repository.deleteById(id);
    }

    public Page<Projeto> listarTodosPaginados(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Page<Projeto> buscarPorNome(String nome, Pageable pageable) {
        return repository.findByNomeContainingIgnoreCase(nome, pageable);
    }
}