<template>
    <div id="app">
        <div class="fixed right-4 top-1/2 transform -translate-y-1/2">
            <span v-for="(offset, index) in offsets" :key="index"
                class="menu-point w-4 h-4 bg-white block my-4 mx-0.5 opacity-60 hover:opacity-100 transition duration-400 ease-in-out cursor-pointer"
                :class="{ active: activeSection === index }" @click="scrollToSection(index)"
                :title="'Go to section ' + (index + 1)"></span>
        </div>
        <section v-for="(color, index) in ['blue', 'black', 'red', 'purple', 'green']" :class="['fullpage', color]"
            :key="index">
            <img v-if="index === 0" src="../../public/alam1.jpg" alt="Image 1" class="object-cover w-full h-72 md:h-full" />
            <img v-if="index === 1" src="../../public/alam2.jpg" alt="Image 1" class="object-cover w-full h-72 md:h-full" />
            <img v-if="index === 2" src="../../public/alam3.jpg" alt="Image 1" class="object-cover w-full h-72 md:h-full" />
            <img v-if="index === 3" src="../../public/alam4.jpg" alt="Image 1" class="object-cover w-full h-72 md:h-full" />
            <img v-if="index === 4" src="../../public/alam5.jpg" alt="Image 1" class="object-cover w-full h-72 md:h-full" />
            <img v-if="index === 5" src="../../public/alam6.jpg" alt="Image 1" class="object-cover w-full h-72 md:h-full" />
        </section>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            inMove: false,
            inMoveDelay: 400,
            activeSection: 0,
            offsets: [],
            touchStartY: 0,
        };
    },
    methods: {
        calculateSectionOffsets() {
            let sections = document.getElementsByTagName('section');
            let length = sections.length;

            for (let i = 0; i < length; i++) {
                let sectionOffset = sections[i].offsetTop;
                this.offsets.push(sectionOffset);
            }
        },
        handleMouseWheel(e) {
            if (e.wheelDelta < 30 && !this.inMove) {
                this.moveUp();
            } else if (e.wheelDelta > 30 && !this.inMove) {
                this.moveDown();
            }

            e.preventDefault();
            return false;
        },
        handleMouseWheelDOM(e) {
            if (e.detail > 0 && !this.inMove) {
                this.moveUp();
            } else if (e.detail < 0 && !this.inMove) {
                this.moveDown();
            }

            return false;
        },
        moveDown() {
            this.inMove = true;
            this.activeSection--;

            if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;

            this.scrollToSection(this.activeSection, true);
        },
        moveUp() {
            this.inMove = true;
            this.activeSection++;

            if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;

            this.scrollToSection(this.activeSection, true);
        },
        scrollToSection(id, force = false) {
            if (this.inMove && !force) return false;

            this.activeSection = id;
            this.inMove = true;

            let section = document.getElementsByTagName('section')[id];
            if (section) {
                document.getElementsByTagName('section')[id].scrollIntoView({ behavior: 'smooth' });
            }

            setTimeout(() => {
                this.inMove = false;
            }, this.inMoveDelay);
        },
        touchStart(e) {
            e.preventDefault();

            this.touchStartY = e.touches[0].clientY;
        },
        touchMove(e) {
            if (this.inMove) return false;
            e.preventDefault();

            const currentY = e.touches[0].clientY;

            if (this.touchStartY < currentY) {
                this.moveDown();
            } else {
                this.moveUp();
            }

            this.touchStartY = 0;
            return false;
        },
    },
    mounted() {
        this.calculateSectionOffsets();

        window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);
        window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false });

        window.addEventListener('touchstart', this.touchStart, { passive: false });
        window.addEventListener('touchmove', this.touchMove, { passive: false });
    },
    unmounted() {
        // Lakukan pembersihan atau operasi terkait saat komponen di-"unmounted"
        window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM);
        window.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });

        window.removeEventListener('touchstart', this.touchStart);
        window.removeEventListener('touchmove', this.touchMove);
    },
};
</script>
  
<style scoped>
body {
    margin: 0;
    font-family: Helvetica, arial, sans-serif;
    overflow: hidden;
}

h2 {
    position: fixed;
}

.fullpage {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    font-size: 6em;
    margin: 0;
    text-align: center;
    padding: 0 1rem;
}

p {
    font-size: 1em;
}

.fullpage a,
.fullpage span {
    text-decoration: none;
    font-weight: 600;
    padding: 5px 10px;
    margin-left: 5px;
}

h1.black {
    color: #000;
}

.sections-menu {
    position: fixed;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
}

.sections-menu .menu-point {
    width: 10px;
    height: 10px;
    display: block;
    margin: 1rem 0;
    opacity: 0.6;
    transition: 0.4s ease-in-out all;
    cursor: pointer;
}

.sections-menu .menu-point.active {
    opacity: 1;
    transform: scale(1.5);
}

.sections-menu .menu-point:hover {
    opacity: 1;
    transform: scale(1.2);
}

@media screen and (max-width: 1200px) {
    h1 {
        font-size: 2.5em;
    }
}
</style>
  