import React ,{useState}from 'react'
import course from '../pics/course.png'
import { Description, Dialog, DialogPanel,DialogBackdrop, DialogTitle } from '@headlessui/react'
import Form from './Form'


const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
  

  
    
  return (
    <>
                <button onClick={() => setIsOpen(true)} className="reffer-btn">
                    Refer Now
                    <span aria-hidden="true">→</span>
                </button>
                
                    <Dialog open={isOpen} onClose={()=>setIsOpen(false)} transition
                        className="z-50 flex fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
                        
                        <DialogBackdrop className="fixed inset-0 bg-black/30" />


                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">

                            <DialogPanel className="max-w-2xl flex space-y-4 bg-white p-12">

                                

                                
                                <Form setIsOpen={setIsOpen}/>
                                
                            </DialogPanel>
                        </div>
                    </Dialog>
                
    </>
  )
}

export default Modal