import {
    put,
    takeLatest,
    call,
} from 'redux-saga/effects';
import * as types from './types';
import { getProductList } from './api';

function* fetchProductList() {
    try {
        const promise = yield call(getProductList);
        promise.then(response => response.json())
            .then(function* onSuccess(response) {
                console.log('Success:', JSON.stringify(response));
                yield put({ type: types.FETCH_LIST_SUCCESS, data: response.data });
            })
            .catch(function* onError(error) {
                console.error('Error:', error);
                yield put({ type: types.FETCH_LIST_FAILED, error });
            });
    } catch (error) {
        yield put({ type: types.FETCH_LIST_FAILED, error });
    }
}

export default function* productSaga() {
    yield [
        takeLatest(types.FETCH_LIST, fetchProductList),
    ];
}
