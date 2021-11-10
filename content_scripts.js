window.onload = function() {
    const elems = [...document.querySelectorAll('h2[id], h3[id], h4[id]')];
    elems.forEach((e) => {
        const link = document.createElement('a');
        link.innerText = '#';
        link.href = location.href + '#' + e.id;
        const small = document.createElement('small');
        small.append(link)
        const sub = document.createElement('sub');
        sub.append(small);
        e.append(sub);
    });
}
