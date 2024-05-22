import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Carrinho from '@/views/Carrinho.vue'
import Comprar from '@/views/Comprar.vue'
import Adicionar from '@/views/AdicionarCarrinho.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: Carrinho
  },
  {
    path: '/comprar',
    name: 'Comprar',
    component: Comprar
  },
  {
    path: '/adicionar',
    name: 'Adicionar',
    component: Adicionar
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
