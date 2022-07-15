findBody = document.querySelector('body')

document.querySelector('#yes').addEventListener('click', eval)


function eval() {
    document.querySelector('main').style.display = 'none'
    document.querySelector('header').style.display = 'none'
    document.querySelector('#epiCon').style.display = 'flex'
    document.querySelector('#bulma').style.display = 'inline'
    document.querySelector('#epiCon').style.margin = '20rem 0 0 0'
    findBody.style.backgroundImage = 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f849f1e6-b991-4b89-bd9b-7b86ae209054/d7xln1o-18120bdb-785a-4ea2-9fc3-8b291bf17448.png/v1/fill/w_1024,h_576,q_80,strp/casa_de_goku_dragon_ball_by_lwisf3rxd_d7xln1o-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZjg0OWYxZTYtYjk5MS00Yjg5LWJkOWItN2I4NmFlMjA5MDU0XC9kN3hsbjFvLTE4MTIwYmRiLTc4NWEtNGVhMi05ZmMzLThiMjkxYmYxNzQ0OC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Tf9l3YCZG51hiAZJFvLPsK7IwUhdH5nT9sH7iQJlTF4)'
    findBody.style.backgroundSize = 'cover'
}

document.querySelector('#no').addEventListener('click', lastchance)

function lastchance() {
    document.querySelector('h1').style.display = 'none'
    document.querySelector('h2').style.display = 'block'
    document.querySelector('.first').style.display = 'none'
    document.querySelector('.second').style.display = 'block'
    findBody.style.backgroundImage = 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f849f1e6-b991-4b89-bd9b-7b86ae209054/d7xlm2x-c7856dd9-0c68-4802-bf0d-6b39c9808e2c.png/v1/fill/w_1024,h_576,q_80,strp/planeta_namekuzei_dragon_ball_by_lwisf3rxd_d7xlm2x-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZjg0OWYxZTYtYjk5MS00Yjg5LWJkOWItN2I4NmFlMjA5MDU0XC9kN3hsbTJ4LWM3ODU2ZGQ5LTBjNjgtNDgwMi1iZjBkLTZiMzljOTgwOGUyYy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.yXEl3iu6XIL6ZTl3jja6J2CAbhD3ptipqdR605kRIUc)'
    findBody.style.backgroundSize = 'cover'
    document.querySelector('.mainGok').style.display = 'none'
}

document.querySelector('#yah').addEventListener('click', yay)

function yay(){
    document.querySelector('h2').style.display = 'none'
    document.querySelector('.second').style.display = 'none'
    document.querySelector('#yay').style.display = 'block'
    findBody.style.backgroundImage = 'url(https://gifdb.com/images/high/dragon-ball-goku-krilin-dancing-58ovapwdbp5vpi7l.gif)'
    findBody.style.backgroundSize = 'cover'
   
}

document.querySelector('#nah').addEventListener('click', what)

function what(){
    document.querySelector('h2').style.display = 'none'
    document.querySelector('.second').style.display = 'none'
    document.querySelector('#what').style.display = 'block'
    document.querySelector('header').style.display = 'none'
    findBody.style.backgroundImage = 'url(https://c.tenor.com/imgbnO1rt5QAAAAC/master-roshi.gif)'
    findBody.style.backgroundPosition = 'center'
    findBody.style.backgroundSize = 'cover'
   
}

document.querySelector('#submit').addEventListener('click', countem)

function countem() {

    eppNum = document.querySelector('#questionOne').value
    
    if (eppNum <= 37){
        document.querySelector('#firstQ').style.display = 'block'
        document.querySelector('#theQuestion').style.display = 'none'
        findBody.style.backgroundImage = 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f849f1e6-b991-4b89-bd9b-7b86ae209054/d7xlmp0-8eb12502-30ce-49bd-99a0-e3848a62a505.png/v1/fill/w_1024,h_576,q_80,strp/dragon_shenlong_dragon_ball_by_lwisf3rxd_d7xlmp0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZjg0OWYxZTYtYjk5MS00Yjg5LWJkOWItN2I4NmFlMjA5MDU0XC9kN3hsbXAwLThlYjEyNTAyLTMwY2UtNDliZC05OWEwLWUzODQ4YTYyYTUwNS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CHPu6F3qJx-Ue3Rb21146TMRjKOaOzGnzxBVqHlcwO8)'
        findBody.style.backgroundSize = 'cover'
    }else if (eppNum > 37 && eppNum <= 74){
        document.querySelector('#secondQ').style.display = 'block'
        document.querySelector('#theQuestion').style.display = 'none'
        findBody.style.backgroundImage = 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f849f1e6-b991-4b89-bd9b-7b86ae209054/d7ggn44-d584b3b5-287a-4a0b-873d-89d78f75313e.png/v1/fill/w_1024,h_576,q_80,strp/mundo_bills_dragon_ball_z_by_lwisf3rxd_d7ggn44-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZjg0OWYxZTYtYjk5MS00Yjg5LWJkOWItN2I4NmFlMjA5MDU0XC9kN2dnbjQ0LWQ1ODRiM2I1LTI4N2EtNGEwYi04NzNkLTg5ZDc4Zjc1MzEzZS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4fTzdKkMXZVf1vZq4UnIwk4-x5xEPo8PL7EI-FhFX_U)'
        findBody.style.backgroundSize = 'cover'
    }else if (eppNum > 74 && eppNum <= 111){
        document.querySelector('#thirdQ').style.display = 'block'
        document.querySelector('#theQuestion').style.display = 'none'
        findBody.style.backgroundImage = 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75dec433-f625-4be0-bece-6aded7e29603/ddp7iko-8f2e351b-cbfa-4c31-a29c-7d908925ff4e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1ZGVjNDMzLWY2MjUtNGJlMC1iZWNlLTZhZGVkN2UyOTYwM1wvZGRwN2lrby04ZjJlMzUxYi1jYmZhLTRjMzEtYTI5Yy03ZDkwODkyNWZmNGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5Rhfyf7yTUBQq31AVzVN4Nq2BraCodtkisOnnhMUH54)'
        findBody.style.backgroundSize = 'cover'
    }else if (eppNum > 111 && eppNum <= 150){
        document.querySelector('#fourthQ').style.display = 'block'
        document.querySelector('#theQuestion').style.display = 'none'
        findBody.style.backgroundImage = 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe27027a-5ead-4d70-9770-11462a07115e/ddsa7cd-7c7428cc-7917-40ca-9910-9a859a841fe3.png/v1/fill/w_1280,h_720,q_80,strp/dragon_balls_by_lucasdp17_ddsa7cd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlMjcwMjdhLTVlYWQtNGQ3MC05NzcwLTExNDYyYTA3MTE1ZVwvZGRzYTdjZC03Yzc0MjhjYy03OTE3LTQwY2EtOTkxMC05YTg1OWE4NDFmZTMucG5nIiwiaGVpZ2h0IjoiPD03MjAiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9mZTI3MDI3YS01ZWFkLTRkNzAtOTc3MC0xMTQ2MmEwNzExNWVcL2x1Y2FzZHAxNy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.JxAu_injP42UZKaRLYc40XUOicrYawoSq7Oteo2DErM)'
        findBody.style.backgroundSize = 'cover'
    }else{
        alert('Please Enter A Valid Episode Number of the Dragon Ball Series.')
    }
}





