<script setup>
import Navbar from '@/components/Navbar.vue';
import Carrinho from '@/components/Carrinho.vue';
import Cards from '@/components/Cards.vue';

import { onMounted, reactive } from 'vue';

const produtos = reactive({ items: [] });

onMounted(() => {
    fetch("produtos.json")
        .then((response) => response.json())
        .then((data) => {
            produtos.items = data;
        })
        .catch((error) => {
            console.error("Failed to fetch products:", error);
        });
});
</script>

<template>
    <main>
        <Navbar />
        <div class="container mt-5">
            <div class="row">
                <Cards
                    v-for="produto in produtos.items"
                    :key="produto.id"
                    :id="produto.id"
                    :imagem="produto.imagem"
                    :nome="produto.nome"
                    :categoria="produto.categoria"
                    :subcategoria="produto.subcategoria"
                    :descrição="produto.descrição"
                    :valor="produto.valor"
                    :quantidade_estoque="produto.quantidade_estoque"
                />
            </div>
        </div>
        <Carrinho />
    </main>
</template>