import { IChampion } from "../utils/@types";

import AntManIMG from "../assets/images/default_hero/ant-man.jpg";
import AntManGIF from "../assets/images/default_hero/ant-man.gif";

export const initialChampion: IChampion = {
  id: 1,
  name: "Homem Formiga",
  image: AntManIMG,
  banner: AntManGIF,
  description: "O Homem-Formiga, também conhecido como Scott Lang, é um herói da Marvel que possui a incrível capacidade de encolher e aumentar de tamanho à vontade. Com um traje especial e a ajuda de partículas subatômicas, ele tem o poder de controlar a sua massa e a força proporcional a ela. Scott Lang utiliza essas habilidades extraordinárias para combater o crime e proteger o mundo de ameaças. Com seu carisma e inteligência, o Homem-Formiga traz uma abordagem única aos desafios, tornando-se um herói capaz de enfrentar perigos tanto no tamanho de um inseto quanto de um gigante. Sua determinação e habilidades especiais o tornam uma força imprevisível e essencial na luta pela justiça.",
  team_info: {
    id: 0,
    name: "",
    description: ""
  },
  skills: {
    id: 0,
    name: "",
    description: "",
    color: ""
  },
};