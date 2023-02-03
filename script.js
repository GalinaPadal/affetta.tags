window.onload = () => {
    function tagsModule() {
        const tagsModules = document.querySelectorAll('[data-tags-module="tags-module"]')

        if (!tagsModules.length) return

        tagsModules.forEach(itemTagsModule => {
            const list = itemTagsModule.querySelector('[data-tags-module="list"]')
            const li = list.querySelectorAll('li')
            const btn = itemTagsModule.querySelector('[data-tags-module="btn"]')
            const btnText = btn.querySelector('[data-tags-module="btn-text"]')

            if (window.matchMedia('(min-width: 991px)').matches) {
                const widthItemTagsModule = itemTagsModule.offsetWidth
                const widthBtn = btn.offsetWidth
                const finalWidth = widthItemTagsModule - widthBtn
    
                let countVisiblyLi = -1
                let widthLi = 0
                let heightList = 0
    
                const allHeightList = list.offsetHeight
                const heightBtn = btn.offsetHeight
                const heightLi = li[0].offsetHeight
    
                if (heightBtn > heightLi) {
                    heightList = heightBtn
                } else {
                    heightList = heightLi
                }
    
                list.style.height = `${heightList}px`
    
                if (li.length) {
                    li.forEach(itemLi => {
                        widthLi += itemLi.offsetWidth
    
                        if (widthLi > finalWidth) {
                            itemLi.classList.add('not-active')
                        } else {
                            countVisiblyLi++
                        }
                    })
                }

                itemTagsModule.classList.add('show')
    
                btn.addEventListener('click', () => {
                    if (itemTagsModule.classList.contains('active')) {
                        list.style.height = `${heightList}px`
                        btnText.textContent = 'Смотреть еще'
                        li.forEach((itemLi, index) => {
                            if (index > countVisiblyLi) {
                                itemLi.classList.add('not-active')
                            }
                        })
                    } else {
                        list.style.height = `${allHeightList}px`
                        btnText.textContent = 'Скрыть'
                        li.forEach(itemLi => {
                            if (itemLi.classList.contains('not-active')) {
                                itemLi.classList.remove('not-active')
                            }
                        })
                    }
    
                    itemTagsModule.classList.toggle('active')
                })
            } else {

            }
        })
    }

    tagsModule()
}