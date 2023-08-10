<template>
    <div class="skills-list">
        <div class="add-skill">
            <label>Skill:</label>
            <input type="text" v-model="newSkill.name" placeholder="Enter skill name" />

            <label>Level:</label>
            <select v-model="newSkill.level">
                <option :value="NEW_SKILL_LEVEL.junior"></option>
                <option :value="NEW_SKILL_LEVEL.middle"></option>
                <option :value="NEW_SKILL_LEVEL.senior"></option>
            </select>

            <button @click="addSkill">Add</button>
        </div>
    </div>

    <div v-for="skill in skills" :key="skill.name" class="skill-item">
        <div v-if="!skill.editing">
            <span @click="editSkill(skill)">{{ skill.name }}</span>
            <progress :value="skill.levelValue" max="100"></progress>
            <button @click="removeSkill(skill)">X</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { NEW_SKILL_LEVEL } from '../constants/index'

export default {
    name: 'SkillsList',
    setup() {
        const newSkill = ref({ name: '', level: NEW_SKILL_LEVEL.junior});
        const skills = ref([]);

        const addSkill = () => {
            if (newSkill.value.name.trim() !== '' && !skills.value.includes(newSkill.value.name.trim())) {
                skills.value.push({...newSkill.value, editing: false, levelValue: getLevelValue(newSkill.value.level)});
                newSkill.value = {};
            }
        };

        const editSkill = (skill) => {
            skill.editing = true;
        };

        const updateSkill = (skill) => {
            skill.editing = false;
        };

        const removeSkill = (skill) => {
            skills.value.filter(sk => sk.name === skill.name);
        }

        const getLevelValue = (level) => {
            switch (level) {
                case NEW_SKILL_LEVEL.junior:
                    return '30';
                case NEW_SKILL_LEVEL.middle:
                    return '60';
                case NEW_SKILL_LEVEL.senior:
                    return '90';
                default:
                    return '0'
            }
        };

        return { newSkill, skills, addSkill, editSkill, updateSkill, removeSkill, NEW_SKILL_LEVEL };
    }
}
</script>