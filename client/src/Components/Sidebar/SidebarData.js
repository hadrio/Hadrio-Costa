import { BiShuffle } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { ImHome3 } from "react-icons/im";
import { MdDashboard, MdOutlineFormatListBulleted} from "react-icons/md";

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <ImHome3 />,
        link: "/Dashboard",
    },
    {
        title: "Equipamentos",
        icon: <MdDashboard/>,
        link: "/Equipamentos",
    },
    {
        title: "Fabricantes",
        icon: <MdOutlineFormatListBulleted />,
        link: "/Fabricantes",
    },
    {
        title: "Setores",
        icon: <MdOutlineFormatListBulleted/>,
        link: "/Setores",
    },
    {
        title: "Situacao",
        icon: <MdOutlineFormatListBulleted />,
        link: "/Situacao",
    },
    {
        title: "Transferencia",
        icon: <BiShuffle/>,
        link: "/Transferencia",
    },
    {
        title: "Relatorios",
        icon: <GoBook/>,
        link: "/Relatorios",
    },
    {
        title: "Usuarios",
        icon: <FaUser/>,
        link: "/Usuarios",
    }
];
