function jQuery(selector, context = document) {
    this.elements = Array.from(context.querySelectorAll(selector));

    return this;
}

jQuery.prototype.each = function (fn) {
    this.elements.forEach((element, index) => fn.call(element, element, index));
    return this;

}


jQuery.prototype.text = function (text = '') {
    this.text = text
    if (text == '') {
        let arr = []
        console.log(this.each(element => arr.push(element.textContent)))
        return arr;
    } else {
        this.each(element => element.innerText = text);
        return this
    }
}

jQuery.prototype.html = function (html = '') {
    this.html = html
    if (html == '') {
        let arr = []
        this.each(element => arr.push(element.innerHTML))
        // Не уверен насколько тут будет правильно возвращать массив, зависит от дальнейшей
        // цели использования результата. Если просто прочитать - можно было вернуть строку
        // либо добавлять в массив через += тогда результат будет лучше читаем

        return arr;

    } else {
        this.each(element => element.innerHTML = html);
        return this
    }
}

const $ = (e) => new jQuery(e);

// $('button').text()
// $('body').html()
// $('button').text('button')
// $('body').html('html')