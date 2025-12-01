let lang = "en";

function toggleLang() {
    lang = lang === "en" ? "bn" : "en";

    document.querySelectorAll(".en").forEach(el =>
        el.style.display = lang === "en" ? "block" : "none"
    );
    document.querySelectorAll(".bn").forEach(el =>
        el.style.display = lang === "bn" ? "block" : "none"
    );

    if (lang === "bn") {
        document.getElementById("title").innerText = "হীরা ফলের দোকান";
        document.getElementById("menuHome").innerText = "হোম";
        document.getElementById("menuProducts").innerText = "ফলসমূহ";
        document.getElementById("menuAbout").innerText = "আমাদের সম্পর্কে";
        document.getElementById("menuContact").innerText = "যোগাযোগ";
        document.getElementById("heroText").innerText = "তাজা ফল প্রতিদিন";
        document.getElementById("productTitle").innerText = "আমাদের ফলসমূহ";

        document.getElementById("aboutTitle").innerText = "আমাদের সম্পর্কে";
        document.getElementById("aboutText").innerText =
            "হীরা ফলের দোকানে প্রতিদিন তাজা ও অর্গানিক ফল পাওয়া যায়। আমরা মান, পরিচ্ছন্নতা এবং গ্রাহক সন্তুষ্টিতে বিশ্বাসী।";

        document.getElementById("contactTitle").innerText = "যোগাযোগ";
        document.getElementById("contactText").innerHTML =
            "ঠিকানা: মেইন মার্কেট, সিটি সেন্টার<br>ফোন: ০১২৩৪৫৬৭৮৯০<br>সময়: সকাল ৮টা – রাত ১০টা";

    } else {
        document.getElementById("title").innerText = "Hira Fruit Shop";
        document.getElementById("menuHome").innerText = "Home";
        document.getElementById("menuProducts").innerText = "Products";
        document.getElementById("menuAbout").innerText = "About";
        document.getElementById("menuContact").innerText = "Contact";
        document.getElementById("heroText").innerText = "Fresh Fruits Everyday";
        document.getElementById("productTitle").innerText = "Our Fresh Fruits";

        document.getElementById("aboutTitle").innerText = "About Us";
        document.getElementById("aboutText").innerText =
            "Hira Fruit Shop provides fresh, organic fruits every day. We believe in quality, cleanliness, and customer satisfaction.";

        document.getElementById("contactTitle").innerText = "Contact Us";
        document.getElementById("contactText").innerHTML =
            "Address: Main Market, City Center<br>Phone: 01234567890<br>Opening Hours: 8 AM – 10 PM";
    }
}
