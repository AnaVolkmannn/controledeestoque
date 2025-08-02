"use client";
import { useState } from "react";
import styles from "./Cadastro.module.css";

export default function CadastroProduto() {
  const [form, setForm] = useState({
    nome: "",
    codigo: "",
    unidade: "",
    fornecedor: "",
    precoCompra: "R$ 0,00",
    valorFrete: "R$ 0,00",
    ipi: "",
    possuiFrete: false,
    possuiIPI: false,
    imagem: null as File | null,
  });

  const formatarReais = (valor: string) => {
    const raw = valor.replace(/\D/g, "");
    const numero = Number(raw) / 100;
    return numero.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;

    if (target instanceof HTMLInputElement) {
      if (target.type === "checkbox") {
        setForm((prev) => ({ ...prev, [target.name]: target.checked }));
        return;
      }
      if (target.name === "precoCompra" || target.name === "valorFrete") {
        setForm((prev) => ({ ...prev, [target.name]: formatarReais(target.value) }));
        return;
      }
      if (target.name === "imagem" && target.files) {
        setForm((prev) => ({ ...prev, imagem: target.files![0] }));
        return;
      }
      setForm((prev) => ({ ...prev, [target.name]: target.value }));
    } else if (
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement
    ) {
      setForm((prev) => ({ ...prev, [target.name]: target.value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.possuiFrete && (form.valorFrete === "R$ 0,00" || form.valorFrete === "")) {
      alert("Preencha o valor do frete corretamente.");
      return;
    }

    if (form.possuiIPI && (!form.ipi || Number(form.ipi) <= 0)) {
      alert("Preencha o valor do IPI corretamente.");
      return;
    }

    alert(`Produto cadastrado: ${form.nome}\nPreço de compra: ${form.precoCompra}`);

    setForm({
      nome: "",
      codigo: "",
      unidade: "",
      fornecedor: "",
      precoCompra: "R$ 0,00",
      valorFrete: "R$ 0,00",
      ipi: "",
      possuiFrete: false,
      possuiIPI: false,
      imagem: null,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Cadastro de Produtos</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Nome do produto:
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>

        <label className={styles.label}>
          Código:
          <input
            type="text"
            name="codigo"
            value={form.codigo}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>

        <label className={styles.label}>
          Unidade de medida:
          <select
            name="unidade"
            value={form.unidade}
            onChange={handleChange}
            className={styles.input}
            required
          >
            <option value="">Selecione</option>
            <option value="kg">kg</option>
            <option value="pç">pç</option>
            <option value="barra">barra</option>
            <option value="chapa">chapa</option>
            <option value="balde">balde</option>
          </select>
        </label>

        <label className={styles.label}>
          Fornecedor:
          <input
            type="text"
            name="fornecedor"
            value={form.fornecedor}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>

        <label className={styles.label}>
          Preço de compra (R$):
          <input
            type="text"
            name="precoCompra"
            value={form.precoCompra}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>

        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="possuiFrete"
            name="possuiFrete"
            checked={form.possuiFrete}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <label htmlFor="possuiFrete">Produto possui frete?</label>
        </div>

        {form.possuiFrete && (
          <label className={styles.label}>
            Valor do frete por peça (R$):
            <input
              type="text"
              name="valorFrete"
              value={form.valorFrete}
              onChange={handleChange}
              className={styles.input}
              required={form.possuiFrete}
            />
          </label>
        )}

        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="possuiIPI"
            name="possuiIPI"
            checked={form.possuiIPI}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <label htmlFor="possuiIPI">Produto possui IPI?</label>
        </div>

        {form.possuiIPI && (
          <label className={styles.label}>
            IPI (%):
            <input
              type="number"
              name="ipi"
              value={form.ipi}
              onChange={handleChange}
              step="0.01"
              min="0"
              className={styles.input}
              required={form.possuiIPI}
            />
          </label>
        )}

        <label className={styles.label}>
          Imagem do produto:
          <input
            type="file"
            name="imagem"
            accept="image/*"
            onChange={handleChange}
            className={styles.fileInput}
          />
        </label>

        <button type="submit" className={styles.submitBtn}>
          Salvar
        </button>

         <button type="submit" className={styles.submitBtn}>
          Ver todos
        </button>

      </form>
    </div>
  );
}