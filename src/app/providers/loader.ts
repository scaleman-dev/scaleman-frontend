declare var $;

export class Loader {
    static present(opacity = 1) {
        $('body').css('overflow', 'hidden');
        $('.backdrop-blur').css('display', 'block');
        $('.backdrop-blur').css('opacity', 1);
        $('.app-wrapper').css('filter', 'blur(5px)');
    }
    static dismiss() {
        $('body').css('overflow', 'auto');
        $('.backdrop-blur').css('display', 'none');
        $('.backdrop-blur').css('opacity', 0);
        $('.app-wrapper').css('filter', 'none');
    }
}