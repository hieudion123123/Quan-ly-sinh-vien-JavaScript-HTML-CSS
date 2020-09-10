class Sinhvien {
    constructor(masinhvien, hovaten, email) {
        this.masinhvien = masinhvien;
        this.hovaten = hovaten;
        this.email = email;
    }
}
class Control {
    add(masinhvien, hovaten, email) {  
    const table = document.getElementById('danh-sach-sinh-vien');
    let tableLength = (table.rows.length)-1;
    table.insertRow(tableLength).outerHTML = `
    <tr id="row${tableLength}">
    <td id="masinhvien${tableLength}">${masinhvien}</td>
    <td id="hovaten${tableLength}">${hovaten}</td>
    <td id="email${tableLength}">${email}</td>
    <td><button type="submit" id="sua${tableLength}">Edit</button>
     <button type="submit" id="xoa${tableLength}">Delete</button>
     <button type="submit" id="luu${tableLength}">Save</button></td>
     </tr>
     `;
    this.delete(tableLength);
    this.edit(tableLength);
    this.save(tableLength);
    document.getElementById("luu"+tableLength).style.display = 'none';
    
    }
    
    delete(tableLength) {
        const deleteBtn = document.getElementById("xoa"+tableLength);
        deleteBtn.addEventListener('click', () => {
            const dieuKien = document.getElementById('masinhvien'+tableLength).textContent;
            for (let i = 0; i < danhSach.length; i++) {
                if(danhSach[i].masinhvien == dieuKien) {
                    danhSach.splice(i, 1);
                }
            }
        document.getElementById("row"+tableLength).innerHTML ='';
        
        })
    }

    edit(tableLength) {
        const editBtn = document.getElementById("sua"+tableLength);
        editBtn.addEventListener('click', () => { 
        const   hoten = document.getElementById("hovaten"+tableLength),
                masv = document.getElementById("masinhvien"+tableLength),
                email = document.getElementById("email"+tableLength);

        const   hovatenCu = hoten.textContent,
                masinhvienCu = masv.textContent,
                emailCu = email.textContent;

    masv.innerHTML = `<input type="text" id="masinhvienMoi${tableLength}" value="${masinhvienCu}">`;
    hoten.innerHTML = `<input type="text" id="hovatenMoi${tableLength}" value="${hovatenCu}">`;
    email.innerHTML = `<input type="text" id="emailMoi${tableLength}" value="${emailCu}">`;
    
    document.getElementById("sua"+tableLength).style.display = 'none';
    document.getElementById("luu"+tableLength).style.display = 'inline-block';
})
}
    save(tableLength){
        const saveBtn = document.getElementById('luu'+tableLength);
        saveBtn.addEventListener('click', () => {
            const   masvMoi = document.getElementById('masinhvienMoi'+tableLength).value,
                    hotenMoi = document.getElementById('hovatenMoi'+tableLength).value,
                    emailMoi = document.getElementById('emailMoi'+tableLength).value;
                
        document.getElementById('masinhvien'+tableLength).textContent = masvMoi;
        document.getElementById('hovaten'+tableLength).textContent = hotenMoi;
        document.getElementById('email'+tableLength).textContent = emailMoi;

        let dulieuMoi = new Sinhvien(masvMoi, hotenMoi, emailMoi);
        danhSach.splice(tableLength-1, 1, dulieuMoi);
        
        })
        
        
    }
    clear(){
        document.getElementById('form-sinh-vien').reset();
    }
}
