import image from './assets/person.png'
import { TitleBlock, ImageBlock, TextBlock, TextColumnsBlock } from './classes/blocks'
import { css } from './utils'

export const model = [
    new TitleBlock('Page with H2 title', {
        tag: 'h2',
        styles: css({
            background: '#000',
            color: '#fff',
            padding: '2rem 0',
            'text-align': 'center'
        })
    }),
    new ImageBlock(image, {
        styles: css({
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        }),
        alt: 'Yuri',
        imageStyles: 'min-width: 500px; height: auto; border-radius: 15px;'
    }),
    new TextBlock('Hello, this is our text in Text block', {
        styles: css({
            padding: '2rem 0',
            'text-align': 'center'
        })
    }),
    new TextColumnsBlock([
        'This is block №1 with text',
        'This is block №2 with text',
        'This is block №3 with text',
        'This is block №4 with text'
    ], {styles: css({
            padding: '2rem 0',
            'font-weight': 'bold',
            'text-align': 'center'
        })
    })
]