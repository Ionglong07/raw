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
    
setInterval(() =>{
    let diem1 = 0, diem2 = 0, diem3 = 0;
                part1Questions.forEach((q, i) => {
                    const chon = document.querySelector(`input[name="p1q${i}"]:checked`);
                    if (chon && Number(chon.value) === q.answer) diem1 += 0.25;
                });
                for (let i = 1; i <= 4; i++) {
                    let dung = 0;
                    ['a', 'b', 'c', 'd'].forEach(group => {
                        const radios = document.getElementsByName(`p2cau${i}_${group}`);
                        radios.forEach(r => {
                            if (r.checked && r.value.toUpperCase() === part2Key[`cau${i}`][group].toUpperCase()) dung++;
                        });
                    });
                    if (dung === 1) diem2 += 0.1;
                    else if (dung === 2) diem2 += 0.25;
                    else if (dung === 3) diem2 += 0.5;
                    else if (dung === 4) diem2 += 1;
                }
                for (let i = 1; i <= 6; i++) {
                    const val = Number(document.getElementById(`p3q${i}`).value);
                    if (Math.abs(val - part3Answers[i - 1]) < 0.001) diem3 += 0.5;
                }
                const tong = diem1 + diem2 + diem3;
                document.getElementById("tongDiem").innerHTML = `Ðiểm số: ${tong.toFixed(2)}`;
    },1000);
    console.log('done');
}


