function showDapAn() {
    const div = document.getElementById("dapAn");
    div.style.display = "flex";
    // Phần 1
    let dapAn1 = "<strong>Ðáp án phần I:</strong><br>";
    part1Questions.forEach((q, i) => {
        dapAn1 += `Câu ${i + 1}: ${abcd[q.answer]}<br>`;
    });
    // Phần 2
    let dapAn2 = "<strong>Đáp án phần II:</strong><br>";
    for (let i = 1; i <= 4; i++) {
        let cau = part2Key[`cau${i}`];
        dapAn2 += `Câu ${i}:<br>`;
        Object.entries(cau).forEach(([key, val]) => {
            dapAn2 += `&nbsp;&nbsp;&nbsp;&nbsp;${key.toUpperCase()}: ${val}<br>`;
        });
    }

    // Phần 3
    let dapAn3 = "<strong>Đáp án phần III:</strong><br>";
    part3Answers.forEach((ans, i) => {
        dapAn3 += `Câu ${i + 1}: ${ans}<br>`;
    });
    document.getElementById("dapAn1").innerHTML = dapAn1;
    document.getElementById("dapAn2").innerHTML = dapAn2;
    document.getElementById("dapAn3").innerHTML = dapAn3;
    document.getElementById("btnXemDapAn").style.display = "none"; // Ẩn nút sau khi hiển thị
}
