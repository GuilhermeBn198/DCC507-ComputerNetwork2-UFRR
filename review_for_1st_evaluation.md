## **A partir do endereco IP de classe C 192.168.0.0/29, responda:**
11111111.11111111.11111111.11111000
### **Quantos endereços IPs são possíveis?** R: 2**3 = 8
### **Descreva a máscara em decimal:** R: 255.255.255.248
### **Quantas subredes são possíveis?** R: 2**5 = 32
### **Descreva as cinco primeiras sub redes: R:**
192.168.1.0 ~ 192.168.1.7
192.168.1.9 ~ 192.168.1.14
192.168.1.15 ~ 192.168.1.21
192.168.1.22 ~ 192.168.1.27
192.168.1.28 ~ 192.168.1.34

--- 
## **Descreva os protocolos de roteamento: RIP, OSPF e BGP citando suas respectivas vantagens, desvantagens e diferença entre as versões**
R:
RIP: (Routing Information Protocol) é um protocolo de roteamento interno que utiliza algoritmos de roteamento IGP(interior gateway protocol), que é o nível de comunicação interna ao AS(autonomous system), recomendado para ambiente pequenos e moderados, porém, apresenta sérias limitações quando utilizado em redes grandes. Uma de suas vantagens é a fácil configuração e seu algoritmo ser relativamente simples.
OSPF: o (Open Shortest Path First) é um protocolo de roteamento dinâmico. Sendo um protocolo aberto, ele é gratuito para qualquer um usar. Sua principal vantagem é a possibilidade de realizar os cálculos pelo algoritmo SPF, também conhecido como algoritmo de Dijkstra, que leva em consideração o custo através da largura de banda, na procura da melhor rota. O OSPF foi desenvolvido tendo em vista a sua utilização em grandes redes, utilizando multicast
BGP: (Border Gateway protocol) é o protocolo subjacente ao sistema de roteamento global da intenret. ele gerencia como os pacotes são roteados, de rede para rede, por meio da troca de informações de roteamento e acessibilidade entre roteadores de ponta. O BGP direciona pacotes entre ASs, que são redes gerenciadas por uma única empresa ou provedor de serviços. Seus principais problemas incluem falhas na troca de informações, onde nem sewmpre são bem-sucedidas.

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
R: 

---
## **Nos protocolos rdt estudados, por que precisamos introduzir temporizadores?**

---
## **Supondo que o atraso de viagem de ida e volta do pacote entre o emissor e o receptor seja constante e conhecido, mesmo assim seria necessário um temporizador, supondo que os pacotes podem ser perdidos? Explique.**

---
## **Suponha que você tenha os seguintes bytes: 11011010 e 00110110. Qual é o complemento de 1 da soma desses 2 Bytes?**

---
## **Ao utilizar o algoritmo de janela deslizante GBN, percebe-se que ao transmitir 10 pacotes da origem até 0 destino, a cada 5 pacotes transmitidos, 0 quinto é perdido. Considerando ainda que a janela do emissor tem tamanho**

---

4 5 6 2