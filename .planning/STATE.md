# ESTADO DO PROJETO: Moa Portfolio Upgrade

Este documento registra a memória atual do projeto, progresso das waves, pendências ativas e próximos passos dentro do fluxo GSD.

---

## 🚦 Status Geral
- **Wave Ativa**: Wave 5B: Acessibilidade (WCAG AA & UX)
- **Status da Wave**: Pendente (Aguardando planejamento)
- **Última Atualização**: 2026-06-02

---

## 📈 Progresso das Waves

- [x] **Wave 0**: Discovery técnico e contexto GSD `[Concluído]`
- [x] **Wave 1**: Fundação profissional, contatos, links, metadados e SEO básico `[Concluído]`
- [x] **Wave 2**: Narrativa profissional, textos e posicionamento para recrutadores `[Concluído]`
- [x] **Wave 3**: Projetos, cards e cases `[Concluído]`
- [x] **Wave 4A**: Favicon, caminhos de asset e performance leve de animações `[Concluído]`
- [ ] **Wave 4B**: Hero com foto pessoal `[Bloqueado — Falta profile.webp]`
- [ ] **Wave 4C**: Imagem social og-image `[Bloqueado — Falta og-image.png]`
- [x] **Wave 5A**: Correção de lint e qualidade de código `[Concluído]`
- [ ] **Wave 5B**: Acessibilidade (WCAG AA & UX) `[Pendente]`
- [ ] **Wave 5C**: Performance e responsividade fina `[Pendente]`
- [ ] **Wave 6**: README, GitHub profile, LinkedIn e publicação final `[Pendente]`

---

## ❓ Pendências & Dúvidas Ativas (Ponto 9 das Regras Obrigatórias)

As seguintes informações ou decisões estão pendentes e precisam ser fornecidas ou validadas nas waves correspondentes:

1. **Currículo em PDF (Wave 1)**: O arquivo do currículo em PDF já existe no repositório? Se sim, qual o caminho exato dele (ex: `/public/curriculo.pdf`)? Se não, precisamos criá-lo ou colocá-lo na pasta `public/`?
2. **Dados de Redes Sociais (Wave 1)**: Os links das redes sociais (LinkedIn, GitHub, E-mail, WhatsApp) em `Footer.jsx` e `Navbar.jsx` já estão atualizados ou precisaremos preenchê-los com informações reais de Moacir Neto?
3. **Foto Pessoal (Wave 4)**: A foto pessoal (`profile.jpg`) de Moacir Neto já está disponível no repositório no caminho `/src/assets/images/profile.jpg`, ou precisaremos gerá-la/obtê-la?
4. **Metadados & Títulos SEO (Wave 1)**: Qual é o título final desejado para a tag `<title>` do site (ex: `Moacir Neto | Desenvolvedor Full Stack Jr`)?
5. **Configurações adicionais de deploy (Wave 1)**: Confirmar se o repositório correto no GitHub é de fato `https://github.com/moaaskt/moa_dev` para validar a propriedade `homepage` em `package.json`.

---

## 🎯 Próximos Passos Recomendados

1. **Planejar a Wave 5B**: Executar `/gsd-plan-phase 5` (focado na subwave 5B) para detalhar as melhorias de contraste sob a WCAG AA para a cor `--text-secondary`, rótulos `aria-label` em botões/links e validação de keyboard focus.
