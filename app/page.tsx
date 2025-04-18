import Image from "next/image"
import Link from "next/link"
import { Check, ShoppingCart, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">FitBag Pro</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#produto" className="text-sm font-medium transition-colors hover:text-primary">
              Produto
            </Link>
            <Link href="#beneficios" className="text-sm font-medium transition-colors hover:text-primary">
              Benefícios
            </Link>
            <Link href="#especificacoes" className="text-sm font-medium transition-colors hover:text-primary">
              Especificações
            </Link>
            <Link href="#comprar" className="text-sm font-medium transition-colors hover:text-primary">
              Comprar
            </Link>
          </nav>
          <Button>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Comprar Agora
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Bolsa de Ginástica Magnética Portátil
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A solução perfeita para transportar seus itens de treino com praticidade e estilo.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Comprar Agora
                  </Button>
                  <Button size="lg" variant="outline">
                    Ver Detalhes
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </div>
                  <div className="text-muted-foreground">5.0 (87 avaliações)</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
                  <Image
                    src="/placeholder.svg?height=450&width=450"
                    alt="Bolsa de Ginástica Magnética"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Benefícios Exclusivos</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Por que escolher nossa bolsa?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra as vantagens que fazem da nossa bolsa magnética a escolha perfeita para suas atividades
                  físicas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Design Magnético</h3>
                <p className="text-center text-muted-foreground">
                  Fechamento magnético que garante segurança e facilidade de acesso aos seus pertences.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Ultra Portátil</h3>
                <p className="text-center text-muted-foreground">
                  Leve e compacta, perfeita para levar para a academia, viagens ou qualquer atividade física.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Material Durável</h3>
                <p className="text-center text-muted-foreground">
                  Fabricada com materiais de alta qualidade que garantem resistência e durabilidade.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Múltiplos Compartimentos</h3>
                <p className="text-center text-muted-foreground">
                  Organização inteligente com diversos bolsos para separar seus itens de forma prática.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Design Moderno</h3>
                <p className="text-center text-muted-foreground">
                  Estilo contemporâneo que combina com qualquer look esportivo ou casual.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Impermeável</h3>
                <p className="text-center text-muted-foreground">
                  Proteção contra umidade para manter seus pertences sempre secos e protegidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="produto" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conheça em detalhes</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nossa bolsa de ginástica magnética foi projetada pensando em praticidade e funcionalidade.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Fechamento magnético de alta resistência</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Alças ajustáveis e confortáveis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Compartimento principal espaçoso</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Bolsos laterais para garrafas de água</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Bolso interno com zíper para objetos de valor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Material resistente à água</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[150px] overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt="Detalhe da bolsa 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[150px] overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt="Detalhe da bolsa 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[150px] overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt="Detalhe da bolsa 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[150px] overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt="Detalhe da bolsa 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="especificacoes" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Especificações Técnicas</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça todos os detalhes técnicos da nossa bolsa de ginástica magnética.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="rounded-lg border shadow-sm">
                <div className="p-6">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 items-start gap-4 border-b pb-4">
                      <div className="font-semibold">Dimensões</div>
                      <div>45cm x 30cm x 20cm</div>
                    </div>
                    <div className="grid grid-cols-2 items-start gap-4 border-b pb-4">
                      <div className="font-semibold">Capacidade</div>
                      <div>25 litros</div>
                    </div>
                    <div className="grid grid-cols-2 items-start gap-4 border-b pb-4">
                      <div className="font-semibold">Material</div>
                      <div>Poliéster de alta densidade</div>
                    </div>
                    <div className="grid grid-cols-2 items-start gap-4 border-b pb-4">
                      <div className="font-semibold">Peso</div>
                      <div>0,8 kg</div>
                    </div>
                    <div className="grid grid-cols-2 items-start gap-4 border-b pb-4">
                      <div className="font-semibold">Cores disponíveis</div>
                      <div>Preto, Azul, Vermelho</div>
                    </div>
                    <div className="grid grid-cols-2 items-start gap-4">
                      <div className="font-semibold">Garantia</div>
                      <div>12 meses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="comprar" className="py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Adquira Agora</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Não perca a oportunidade de ter a melhor bolsa de ginástica do mercado.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <div className="text-center">
                  <div className="text-4xl font-bold">R$ 149,90</div>
                  <div className="text-sm text-primary-foreground/80">ou 12x de R$ 12,49 sem juros</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Comprar Agora
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Adicionar ao Carrinho
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4" />
                <span>Frete grátis para todo o Brasil</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Perguntas Frequentes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tire suas dúvidas sobre nossa bolsa de ginástica magnética.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="grid gap-4">
                <div className="rounded-lg border shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-bold">A bolsa é resistente à água?</h3>
                    <p className="mt-2 text-muted-foreground">
                      Sim, nossa bolsa é fabricada com material resistente à água, protegendo seus pertences de
                      respingos e chuvas leves.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-bold">Qual é a capacidade da bolsa?</h3>
                    <p className="mt-2 text-muted-foreground">
                      A bolsa tem capacidade para 25 litros, espaço suficiente para roupas, toalhas, calçados e
                      acessórios de treino.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-bold">Como funciona o fechamento magnético?</h3>
                    <p className="mt-2 text-muted-foreground">
                      O fechamento magnético utiliza ímãs de alta potência que garantem que a bolsa permaneça fechada
                      durante o uso, mas permite fácil abertura quando necessário.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-bold">A bolsa tem garantia?</h3>
                    <p className="mt-2 text-muted-foreground">
                      Sim, oferecemos 12 meses de garantia contra defeitos de fabricação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="font-bold">FitBag Pro</div>
            <p className="text-sm text-muted-foreground">© 2025 FitBag Pro. Todos os direitos reservados.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Termos de Uso
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Contato
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
