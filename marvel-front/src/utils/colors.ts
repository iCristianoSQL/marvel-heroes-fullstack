import { darken, transparentize } from "polished"

export const colors = {
    primary: {
        0: '#050505',
        0.1: transparentize(0.6, '#050505'),
        0.2: darken(0.2, '#050505'),
        1: '#F3EFEF',
        1.1: transparentize(0.6, '#F3EFEF'),
        1.2: darken(0.2, '#F3EFEF'),
        2: '#555050',
        2.1: transparentize(0.6, '#555050'),
        2.2: transparentize(0.2, '#555050'),
    },
    danger: {
        0: '#E22323',
        0.1: transparentize(0.9, '#E22323'),
        0.2: darken(0.9, '#E22323'),
    },
    valid: {
        0: '#024d06',
        0.1: transparentize(0.2, '#024d06'),
        0.2: darken(0.9, '#024d06'),
    }
}