<template>
    <div class="mdc-data-table mdc-data-table--select-multiple">
        <table id="table" class="mdc-data-table__content">
            <thead>
            <tr class="mdc-data-table__row">
                <th class="mdc-data-table__column mdc-data-table__column--sortable"></th>
                <th class="mdc-data-table__column mdc-data-table__column--sortable">Task name</th>
                <th class="mdc-data-table__column mdc-data-table__column--sortable">Created on</th>
            </tr>
            </thead>
            <tbody id="list">
            <tr v-for="element in elements" class="mdc-data-table__row">
                <td class="mdc-data-table__cell">
                    <div class="mdc-checkbox mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" style="--mdc-ripple-fg-size:24px; --mdc-ripple-fg-scale:1.6666666666666667; --mdc-ripple-left:8px; --mdc-ripple-top:8px;">
                        <label>
                            <input class="mdc-checkbox__native-control" :value="element.id" type="checkbox"/>
                        </label>
                    </div></td>
                <td class="mdc-data-table__cell">
                    <span v-if="element.done" style="text-decoration: line-through;">{{element.message}}</span>
                    <span v-else-if="!element.done">{{element.message}}</span>
                </td>
                <td class="mdc-data-table__cell">
                    <span v-if="element.done" style="text-decoration: line-through;">{{element.date}}</span>
                    <span v-else-if="!element.done">{{element.date}}</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'TodoList',
        props: ['elements']
    }
</script>

<style scoped>

</style>