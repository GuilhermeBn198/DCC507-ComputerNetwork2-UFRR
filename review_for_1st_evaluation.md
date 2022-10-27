## **A partir do endereco IP de classe C 192.168.0.0/29, responda:**
11111111.11111111.11111111.11111000
### **Quantos endereços IPs são possíveis?** R: 2**3 = 8
### **Descreva a máscara em decimal:** R: 255.255.255.248
### **Quantas subredes são possíveis?** R: 2**5 = 32
### **Descreva as cinco primeiras sub redes: R:**
192.168.1.0 ~ 192.168.1.7
192.168.1.8 ~ 192.168.1.15
192.168.1.16 ~ 192.168.1.23
192.168.1.24 ~ 192.168.1.31
192.168.1.32 ~ 192.168.1.40

---
## **Descreva o serviço da camada de transporte ACK
o ACK é o pacote que o cliente manda de volta ao servidor, reconhecendo a resposta do servidor
---
## **Descreva o protocolo UDP**
R: o Protocolo UDP significa unreliable datagram protocol e é um dos protocolos da camada de transporte, ele não dá nenhuma garantia às camadas superiores, não adiciona nada ao IP e não é orientado à conexão.
---
## **Descreva o protocolo TCP**
- uma conexao tcp provê um serviço full-duplex
- é processo a processo
- quando a conexão tcp ocorre, dois processos podem enviar dados um pro outro
## **Descreva os protocolos de roteamento: RIP, OSPF e BGP citando suas respectivas vantagens, desvantagens e diferença entre as versões**
R:
RIP: (Routing Information Protocol) é um protocolo de roteamento interno que utiliza algoritmos de roteamento IGP(interior gateway protocol), que é o nível de comunicação interna ao AS(autonomous system), recomendado para ambiente pequenos e moderados, um problema de seus problemas é a baixa convergência e a inundação da rede por pacotes pois ele faz um broadcast de sua tabela de roteamento a cada 30 segundos. Uma de suas vantagens é a fácil configuração e seu algoritmo ser relativamente simples.
OSPF: o (Open Shortest Path First) é um protocolo de roteamento dinâmico. Sendo um protocolo aberto, ele é gratuito para qualquer um usar. Sua principal vantagem é a possibilidade de realizar os cálculos pelo algoritmo SPF, também conhecido como algoritmo de Dijkstra, que leva em consideração o custo através da largura de banda, na procura da melhor rota. O OSPF  Caracteriza-se por ser um protocolo intra-dominio, hierárquico, baseado no algoritmo de Estado de Enlace, utilizando multicast
BGP: (Border Gateway protocol) é um protocolo de roteamento interdominios, criado para uso nos roteadores principais da Internet, foi projetado para evitar loops de roteamento em topologias arbitrarias. ele gerencia como os pacotes são roteados, de rede para rede, por meio da troca de informações de roteamento e acessibilidade entre roteadores de ponta. O BGP direciona pacotes entre ASs, que são redes gerenciadas por uma única empresa ou provedor de serviços. Seus principais problemas incluem falhas na troca de informações, onde nem sewmpre são bem-sucedidas.

--- 
## **Descreva os tipos de Network Address Translation (NAT), citando vantagens, desvantagens e ambiente de utilização.**

---
## **Qual a função do protocolo ARP? Descreva com suas palavras.**
R: é o protocolo responsável por interligar o endereço IP dinâmico à um endereço de máquina fisico fixo(MAC)

---
## **Qual a função do protocolo ICMP? Descreva com suas palavras.**
R: o protocolo (Internet Control Message Protocol) é especificamente um protocolo que permite gerenciar as informações relativas aos erros em uma rede. Como o protocolo IP não corrige a maior parte dos erros, ele simplesmente sinalizada os erros para camadas vizinhas.

---
## **Nos protocolos rdt estudados, por que precisamos introduzir números de sequência?**
R: sem eles os pacotes acabam sendo introduzidos pelo canal sem a devida ordem, causando assim um congestionamento na rede

---
## **Nos protocolos rdt estudados, por que precisamos introduzir temporizadores?**
R: os temporizadores agem como verificadores que se iniciam toda vez que um pacote é enviado para saber se determinado pacote foi recebido com sucesso ou não pelo cliente
---
## **Supondo que o atraso de viagem de ida e volta do pacote entre o emissor e o receptor seja constante e conhecido, mesmo assim seria necessário um temporizador, supondo que os pacotes podem ser perdidos? Explique.**
R: sim, pois esse é justamente o ponto de uso dos temporizadores, garantir que os pacotes sejam enviados na tentativa de receber suas respostas(acks)
---
## **Suponha que você tenha os seguintes bytes: 11011010 e 00110110. Qual é o complemento de 1 da soma desses 2 Bytes?**

---
## **Ao utilizar o algoritmo de janela deslizante GBN, percebe-se que ao transmitir 10 pacotes da origem até 0 destino, a cada 5 pacotes transmitidos, 0 quinto é perdido. Considerando ainda que a janela do emissor tem tamanho**

---

4 5 6 2