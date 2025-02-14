// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// 表单提交处理
document.getElementById('join-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // 这里添加表单提交逻辑
    alert('感谢您的申请！我们会尽快与您联系。');
    this.reset();
});

// 动态加载活动数据
const events = [
    {
        title: '创业经验分享会',
        date: '2024年4月15日',
        description: '成功创业者分享他们的创业历程和经验教训'
    },
    {
        title: '小型企业运营工作坊',
        date: '2024年4月22日',
        description: '学习如何有效管理和运营小型企业'
    },
    {
        title: '创业融资讲座',
        date: '2024年4月29日',
        description: '了解创业初期的融资策略和方法'
    }
];

function loadEvents() {
    const eventsGrid = document.querySelector('.events-grid');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p class="event-date">${event.date}</p>
            <p>${event.description}</p>
        `;
        eventsGrid.appendChild(eventCard);
    });
}

document.addEventListener('DOMContentLoaded', loadEvents); 