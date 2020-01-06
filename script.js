jQuery(document).ready(function() { $("body").on("click", ".tombol-db-kenscripts", function(e) { var a = $(this).parent();
				//Visit https://www.kenscripts.me for more code
        a.toggleClass("isi-db-kenscripts"), a.parent(".db").children(".link-db-kenscripts").not(a).addClass("isi-db-kenscripts"), e.preventDefault() })});