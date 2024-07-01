'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/app/components/slider.module.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const specializations = [
    { title: "Sistemas ERP", description: "Desarrollamos sistemas de planificación de recursos empresariales (ERP) personalizados para ayudar a las empresas a gestionar sus operaciones de negocio." },
    { title: "Sistemas CRM", description: "Creamos sistemas de gestión de relaciones con los clientes (CRM) para ayudar a las empresas a mejorar sus relaciones y la interacción con los clientes." },
    { title: "Aplicaciones Móviles", description: "Desarrollamos aplicaciones móviles innovadoras y fáciles de usar para diversas plataformas." },
    { title: "Aplicaciones Web", description: "Creamos aplicaciones web interactivas y receptivas que ofrecen una excelente experiencia de usuario." },
    { title: "Aplicaciones Multiplataforma", description: "Desarrollamos aplicaciones multiplataforma que funcionan sin problemas en diferentes sistemas operativos y dispositivos." },
]

const Slider = () => {
    return (
        <Swiper
            className={styles.swiper}
            modules={[Navigation]}
            spaceBetween={48}
            slidesPerView={3}
            loop={false}

            scrollbar={{ draggable: true }}
        >
            {
                specializations.map(
                    (specialization, index) => (
                        <SwiperSlide key={index} className={styles.swiper_slide}>
                                <h3>{specialization.title}</h3>
                                <p>{specialization.description}</p>
                        </SwiperSlide>
                    )
                )
            }
        </Swiper>
    )
}

export default Slider