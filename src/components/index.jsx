import { useState } from "react"



export default function CardsdeImagens() {
    const [category, setCategory] = useState('Viagens')

    // Função para obter o caminho da imagem de fundo com base na categoria
    const getBackgroundImage = () => {
        switch (category) {
            case 'Viagens':
                return '/imagemdefundoviagens.jpg';
            case 'Caes':
                return '/fundocaes.jpg';
            case 'Gatos':
                return '/fundogatos.jpg';
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Abas */}
            <div className="buttonsall">
                <button onClick={() => setCategory('Viagens')}>Viagens</button>
                <button onClick={() => setCategory('Caes')}>Cães</button>
                <button onClick={() => setCategory('Gatos')}>Gatos</button>
            </div>

            <div className="cards-all" style={{ backgroundImage: `url(${getBackgroundImage()})` }}>
                {category === 'Viagens' && (
                    <><div className="card">
                        <div><img className="card-image" src="/igrejaquadrado 2.jpg" /></div>
                        <div className="category"><p>Igreja do Quadrado</p></div>
                        <div className="heading">Monumento do Século XVII - Trancoso/BA</div>
                        <div><a className="category-location" href="https://www.google.com/maps/place/Igreja+S%C3%A3o+Jo%C3%A3o+Batista+(%E2%80%9CIgrejinha+do+Quadrado%E2%80%9D)/@-16.5906567,-39.0919838,17.26z/data=!4m6!3m5!1s0x7369b8aca4dc97d:0x1012ccf521ae6503!8m2!3d-16.5893788!4d-39.0925838!16s%2Fg%2F11c3xf124f?entry=ttu" target="_blank" rel="noopener noreferrer">
                            Localização</a></div>
                    </div><div className="card">
                            <div><img className="card-image" src="/cachoeira.jpg" /></div>
                            <div className="category"><p>Cachoeira 3 Quedas</p></div>
                            <div className="heading">Paisagem Natural - Queda D'Água - Brotas/SP</div>
                            <div><a className="category-location" href="https://www.google.com/maps/place/Cachoeira+3+Quedas/@-22.434053,-47.9713612,12.26z/data=!4m18!1m8!3m7!1s0x94c779b1ef54476b:0x53ea79d1218530bb!2sBrotas,+SP,+17380-000!3b1!8m2!3d-22.2862718!4d-48.1254401!16s%2Fg%2F11bc61xc3t!3m8!1s0x94c79f613f8b994f:0x88a60bc2863e6435!5m2!4m1!1i2!8m2!3d-22.430651!4d-48.024332!16s%2Fg%2F11_rncwhz?entry=ttu" target="_blank" rel="noopener noreferrer">
                                Localização</a></div>
                        </div>
                        <div className="card">
                            <div><img className="card-image" src="/faculdad.jpg" /></div>
                            <div className="category"><p>Facultad de Derecho</p></div>
                            <div className="heading"> Faculdade Pública de Direito - Buenos Aires</div>
                            <div><a className="category-location" href="https://www.google.com/maps/place/Facultad+de+Derecho+(UBA)/@-34.5826299,-58.3945545,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccbbe57694af1:0x3be62989f4e4adcf!8m2!3d-34.5826299!4d-58.3919796!16s%2Fg%2F187cd5ct?entry=ttu" target="_blank" rel="noopener noreferrer">
                                Localização</a></div>
                        </div></>
                )}


                {category === 'Caes' && (
                    <><div className="card">
                        <div><img className="card-image" src="/rango3.jpg" /></div>
                        <div className="category"><p>Rango</p></div>
                        <div className="heading">Idade: 2 anos</div>
                        <div><p className="category-location">Habilidade Especial: Comer parede, destruir camas e brinquedos</p></div>
                    </div>
                        <div className="card">
                            <div><img className="card-image" src="/mauricio4.jpg" /></div>
                            <div className="category"><p>Maurício</p></div>
                            <div className="heading">Idade: 5 anos</div>
                            <div><p className="category-location">Habilidade Especial: Compulsão alimentar e ansiedade</p></div>
                    
                        </div></>
                )}
                {category === 'Gatos' && (
                    <><div className="card">
                        <div><img className="card-image" src="/xanin2.jpg" /></div>
                        <div className="category"><p>Xanin</p></div>
                        <div className="heading">Idade: 5 anos</div>
                        <div><p className="category-location">Habilidade Especial: Morder canela.</p></div>
                    </div>
                        <div className="card">
                            <div><img className="card-image" src="/02-3.jpg" /></div>
                            <div className="category"><p>02 (O Branco e Preto)</p></div>
                            <div className="heading">Idade: 4 anos</div>
                            <div><p className="category-location">Habilidade Especial: A visita nunca viu.</p></div>
                    
                        </div>
                        <div className="card">
                            <div><img className="card-image" src="/tilanga3.jpg" /></div>
                            <div className="category"><p>Tilanga</p></div>
                            <div className="heading">Idade: 3 anos</div>
                            <div><p className="category-location">Habilidade Especial: As vezes corre engraçado.</p></div>
                    
                        </div>
                        <div className="card">
                            <div><img className="card-image" src="/lucy1.jpg" /></div>
                            <div className="category"><p>Lucy</p></div>
                            <div className="heading">Idade: 2 anos</div>
                            <div><p className="category-location">Habilidade Especial: Faz um barulho estranho quando você coça ela.</p></div>
                    
                        </div></>
                )}
            </div>
        </div>
    )
}