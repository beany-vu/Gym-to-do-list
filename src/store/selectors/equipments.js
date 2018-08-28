import { createSelector } from 'reselect';

export const getEquipments = state => state.equipments;

export const equipmentsSelector = createSelector(
    getEquipments, equipments => equipments.reduce(
        (accumulator, current) => {
            accumulator[current.id] = current;
            return accumulator;
        }, {},
    ),
);
