import { useState } from "react";
import DatePicker,{ registerLocale }  from "react-datepicker";
import Api from "../../../api/Api";
import Header from "../../../Components/Hearder";
import Sidebar from "../../../Components/Sidebar";
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('pt-br',ptBR)

const CrudEquipments = () => {

    const [tombo, setTombo] = useState("");
    const [specifications, setSpecificantions] = useState("");
    const [obs, setObs] = useState("");
    const [typeEquipment, setTypeEquiment] = useState("");
    const [equipManufacturer, setEquipManufacturer] = useState("");
    const [equipSituation, setEquipSituation] = useState("");
    const [garantia, setGatantia] = useState("")
    // const [createdAt, setCreatedAt] = useState(new Date())

    const handleSubmit  = async (e) =>{
        e.preventDefault()
        Api.post('/register_equipment', {
            tombo: tombo,
            specifications: specifications,
            obs: obs,
            typeEquipment: typeEquipment,
            equipManufacturer: equipManufacturer,
            equipSituation: equipSituation,
            //createdAt: createdAt,
        }).then((res) =>{
            console.log(res);
        })
    }


    
    return(
        <div className="fullPage">
            <Sidebar/>
            <div className="hearder">
                <Header/>
                <div className="scroll">
                    <div className="conteudoPage">
                        <div className="boxUsers">
                            <form 
                                className="file" 
                                method='post'
                                onSubmit={handleSubmit} 
                                action="/CrudEquipments"
                                >
                                <input
                                    className="input"
                                    required
                                    placeholder="tombo"
                                    type='tombo'
                                    name='tombo'
                                    value={tombo}
                                    onChange={(e) => setTombo(e.target.value)}
                                />
                                <input
                                    className="input"
                                    required
                                    placeholder="Especificações do Equipamento"
                                    type='specification'
                                    name='specificatio'
                                    value={specifications}
                                    onChange={(e) => setSpecificantions(e.target.value)}
                                />
                                <input
                                    className="input"
                                    required
                                    placeholder="Observações sobre o equipamento"
                                    type='obs'
                                    name='obs'
                                    value={obs}
                                    onChange={(e) => setObs(e.target.value)}
                                />
                                <input
                                    className="input"
                                    required
                                    placeholder="tipos de equipamento"
                                    type='typeEquipment'
                                    name='typeEquipment'
                                    value={typeEquipment}
                                    onChange={(e) => setTypeEquiment(e.target.value)}
                                />
                                <input
                                    className="input"
                                    required
                                    placeholder="Selecione fabricante"
                                    type='equipManufacturer'
                                    name='equipManufacturer'
                                    value={equipManufacturer}
                                    onChange={(e) => setEquipManufacturer(e.target.value)}
                                />
                                <input
                                    className="input"
                                    required
                                    placeholder="Selecione Situação"
                                    type='equipSituation'
                                    name='equipSituation'
                                    value={equipSituation}
                                    onChange={(e) => setEquipSituation(e.target.value)}
                                />
                               
                                <button 
                                    className="input">
                                        Cadastrar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default CrudEquipments;