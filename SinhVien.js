let danhSach = [];
const submitBtn = document.getElementById('form-sinh-vien');
submitBtn.addEventListener('submit', (e) => {
    const   maSinhVien = document.getElementById('ma-sinh-vien').value,
            hoVaTen = document.getElementById('ho-va-ten').value,
            email = document.getElementById('email').value;
    
    const crt = new Control();

    if (maSinhVien == '' || hoVaTen == '' || email == '') {
        alert('Vui long nhap day du thong tin');
    } else {
        const sinhVienList = new Sinhvien(maSinhVien, hoVaTen, email);
        danhSach.push(sinhVienList);
        crt.add(maSinhVien, hoVaTen, email);
        crt.clear();  
    }

    e.preventDefault();
})
