import sgplogo from '../../../assets/images/Logo SGP.svg'
import logout from '../../../assets/icons/logout.svg'
import contentGestor from '../../../assets/images/Content.png'
export const SidebarComponent=()=>{

    return(
          <div className=" container flex flex-col justify-between items-start flex-shrink-0 overflow-y-scroll w-[330px] h-screen p-10 bg-white-200">
            <div className=" header flex flex-col gap-10 items-start  self-stretc ">
                  <img src={sgplogo} alt=" logo sgp" />
                  <img src={contentGestor} alt="gestor" />
            </div>

            <div className=' itens flex flex-col  justify-start w-[100%]  gap-6 rounded-sm  cursor-pointer mb-48 '>
                <label className='font-sidebar font-inter text-sidebar cursor-pointer'>Home</label>
                <label className='font-sidebar font-inter text-sidebar'>Projetos</label>
                <label className='font-sidebar font-inter text-sidebar'>Contratos</label>
            </div>

            <div className='logout  flex flex-row gap-2 cursor-pointer font-inter'>
                <img src={logout} alt="icone de logout" />
                 <p>Sair </p>

            </div>
            
          </div>
    )
   
 




}