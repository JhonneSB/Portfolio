package com.portfolio.carlosjhonne.controller;

import com.portfolio.carlosjhonne.model.Projeto;
import com.portfolio.carlosjhonne.service.ProjetoService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class PortfolioController {

    private final ProjetoService projetoService;

    public PortfolioController(ProjetoService projetoService) {
        this.projetoService = projetoService;
    }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("projetos", projetoService.listarTodos());
        return "home";
    }

    @GetMapping("/admin")
    public String admin(Model model,
                       @RequestParam(required = false) String busca,
                       @RequestParam(defaultValue = "1") int pagina) {
        
        Pageable pageable = PageRequest.of(pagina - 1, 10);
        Page<Projeto> projetosPage;
        
        if (busca != null && !busca.isEmpty()) {
            projetosPage = projetoService.buscarPorNome(busca, pageable);
        } else {
            projetosPage = projetoService.listarTodosPaginados(pageable);
        }
        
        model.addAttribute("projetos", projetosPage.getContent());
        model.addAttribute("totalPaginas", projetosPage.getTotalPages());
        model.addAttribute("paginaAtual", pagina);
        model.addAttribute("busca", busca);
        
        return "listaProjetos";
    }

    @GetMapping("/admin/novo")
    public String novoProjeto(Model model) {
        model.addAttribute("projeto", new Projeto());
        return "novoProjeto";
    }

    @PostMapping("/admin/salvar")
    public String salvar(@Valid @ModelAttribute("projeto") Projeto projeto, 
                        BindingResult result,
                        RedirectAttributes attributes) {
        
        if (result.hasErrors()) {
            return "novoProjeto";
        }
        
        projetoService.salvar(projeto);
        attributes.addFlashAttribute("mensagem", "Projeto salvo com sucesso!");
        return "redirect:/admin";
    }

    @GetMapping("/admin/editar/{id}")
    public String editarProjeto(@PathVariable Long id, Model model) {
        Projeto projeto = projetoService.buscarPorId(id)
            .orElseThrow(() -> new IllegalArgumentException("ID de projeto inválido: " + id));
        model.addAttribute("projeto", projeto);
        return "novoProjeto";
    }

    @PostMapping("/admin/atualizar/{id}")
    public String atualizarProjeto(@PathVariable Long id,
                                 @Valid @ModelAttribute("projeto") Projeto projeto,
                                 BindingResult result,
                                 RedirectAttributes attributes) {
        
        if (result.hasErrors()) {
            return "novoProjeto";
        }
        
        projetoService.salvar(projeto);
        attributes.addFlashAttribute("mensagem", "Projeto atualizado com sucesso!");
        return "redirect:/admin";
    }

    @GetMapping("/admin/excluir/{id}")
    public String excluirProjeto(@PathVariable Long id, RedirectAttributes attributes) {
        projetoService.excluir(id);
        attributes.addFlashAttribute("mensagem", "Projeto excluído com sucesso!");
        return "redirect:/admin";
    }
}