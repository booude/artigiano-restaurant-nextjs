import { Carousel } from '@/components/Carousel'
import { Tabs } from '@/components/Tabs'
import img1 from '../../../../public/photos/07.avif'

const IMAGES = [img1, img1, img1]

const MenuPage = () => {
  return (
    <div>
      <Carousel images={IMAGES} />
      <div className="m-auto block w-[58rem]">
        <h1 className="m-10 text-wrap text-center font-serif text-5xl italic text-white">
          Cardápios
        </h1>
        <p className="text-justify font-serif text-lg text-white">
          Nossa cozinha é baseada em uma apreciação por ingredientes
          excepcionais cultivados localmente, preparações simples e cuidadosas,
          e uma paixão por dar nova vida a receitas antigas. As sobremesas são
          inspiradas em receitas de família que remontam a quatro gerações. Além
          dos cardápios listados aqui, oferecemos uma seleção de especiais
          diários.
        </p>
        <div>
          <Tabs />
        </div>
      </div>
    </div>
  )
}

export default MenuPage
