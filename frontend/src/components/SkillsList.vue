<template>
    <div class="skills-list">
        <div class="add-skill">
            <div class="skill-input">
                <label>Skill:</label>
                <input type="text" v-model="newSkill.name" placeholder="Enter skill name" />
            </div>

            <div class="level-input">
                <label>Level:</label>
                <select v-model="newSkill.level" class="level-select">
                    <option :value="NEW_SKILL_LEVEL.junior">{{ NEW_SKILL_LEVEL.junior }}</option>
                    <option :value="NEW_SKILL_LEVEL.middle">{{ NEW_SKILL_LEVEL.middle }}</option>
                    <option :value="NEW_SKILL_LEVEL.senior">{{ NEW_SKILL_LEVEL.senior }}</option>
                </select>
                <button @click="addSkill">Add</button>
            </div>

        </div>

        <div class="skills">
            <div v-for="skill in skillsMap[props?.username]" :key="skill.name" class="skill-item">
                <span @click="editSkill(skill)">{{ skill.name }}</span>
        
                <div v-if="!skill.editing">
                    <progress :value="skill.levelValue" max="100"></progress>
                    <button class="level-btn" @click="removeSkill(skill)">X</button>
                </div>
        
                <div v-else>
                    <select v-model="skill.level" class="level-select">
                        <option :value="NEW_SKILL_LEVEL.junior">{{ NEW_SKILL_LEVEL.junior }}</option>
                        <option :value="NEW_SKILL_LEVEL.middle">{{ NEW_SKILL_LEVEL.middle }}</option>
                        <option :value="NEW_SKILL_LEVEL.senior">{{ NEW_SKILL_LEVEL.senior }}</option>
                    </select>
                    <button class="level-btn" @click="updateSkill(skill)">Update</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { ref, watch } from 'vue'
import { NEW_SKILL_LEVEL } from '../constants/index'

export default {
    name: 'SkillsList',
    props: ['username'],
    setup(props) {
        const newSkill = ref({ name: '', level: NEW_SKILL_LEVEL.junior});
        const skillsMap = ref({});

        watch(() => props.username, (newUserName) => {
            if (!skillsMap.value[newUserName]) {
                skillsMap.value[newUserName] = [];
            }
        });

        /**
         * This function add skill to skillsMap to save the user's skills
         * It's required an activeUser as props.username to execute and prevent duplicate skills
         */
        const addSkill = () => {
            if (!props?.username?.length) {
                return;
            }
            const trimSkillName = newSkill.value?.name?.trim();

            const index = skillsMap?.value[props.username].findIndex(
                skill => skill.name.toLowerCase() === trimSkillName.toLowerCase())
            ;

            if (trimSkillName !== '' && index === -1) {
                skillsMap.value[props.username].push({
                    ...newSkill.value,
                    editing: false,
                    levelValue: getLevelValue(newSkill.value.level)
                });
                newSkill.value = {level: NEW_SKILL_LEVEL.junior};
            }
        };

        const editSkill = (skill) => {
            skill.editing = true;
        };

        const updateSkill = (skill) => {
            skill.levelValue = getLevelValue(skill.level);
            skill.editing = false;
        };

        const removeSkill = (skill) => {
            const index = skillsMap.value[props.username].findIndex(sk => sk.name === skill.name);

            if (index > -1) {
                skillsMap.value[props.username].splice(index, 1);
            }
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

        return { newSkill, skillsMap, addSkill, editSkill, updateSkill, removeSkill, NEW_SKILL_LEVEL, props };
    }
}
</script>

<style>
    .skills-list {
        padding: 10px 0px;
    }

    .add-skill {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        justify-content: space-around;
        border-bottom: 1px solid #000;
        height: 45px;
    }

    .skills {
        margin-top: 100px;
    }

    .skill-input {
        width: 40%;
        display: flex;
        justify-content: space-around;
    }

    .level-input {
        width: 40%;
        display: flex;
        justify-content: space-around;
    }

    .skill-item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 10px 0;
        width: 100%;
    }

    .skill-item div {
        width: 80%;
    }

    .skill-item progress {
        width: 80%;
    }

    .level-btn {
        margin-left: 10px;
    }

    .level-select {
        min-width: 150px;
    }
</style>