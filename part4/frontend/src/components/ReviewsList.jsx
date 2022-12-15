

import { View, Text } from 'react-native'
import React from 'react'

const ReviewsList = () => {

  //TODO: exercise 10.20

  const reviews = {
    "data": {
      "repository": {
        "id": "jaredpalmer.formik",
        "fullName": "jaredpalmer/formik",
        "reviews": {
          "edges": [
            {
              "node": {
                "id": "753f3e99-e73a-43a3-9a50-b30d7727c0eb.jaredpalmer.formik",
                "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
                "rating": 96,
                "createdAt": "2022-12-07T05:35:37.618Z",
                "user": {
                  "id": "753f3e99-e73a-43a3-9a50-b30d7727c0eb",
                  "username": "leeroyjenkins"
                }
              }
            },
            {
              "node": {
                "id": "9b9d927e-2ee9-4f93-b96b-c8f677c63a5f.jaredpalmer.formik",
                "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
                "rating": 89,
                "createdAt": "2022-12-07T06:35:37.618Z",
                "user": {
                  "id": "9b9d927e-2ee9-4f93-b96b-c8f677c63a5f",
                  "username": "johndoe"
                }
              }
            },
            {
              "node": {
                "id": "cff8872a-8ff5-4092-ac2f-d79e65f18aa2.jaredpalmer.formik",
                "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
                "rating": 100,
                "createdAt": "2022-12-07T07:35:37.618Z",
                "user": {
                  "id": "cff8872a-8ff5-4092-ac2f-d79e65f18aa2",
                  "username": "elina"
                }
              }
            },
            {
              "node": {
                "id": "1b10e4d8-57ee-4d00-8886-e4a049d7ff8f.jaredpalmer.formik",
                "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
                "rating": 70,
                "createdAt": "2022-12-07T08:35:37.618Z",
                "user": {
                  "id": "1b10e4d8-57ee-4d00-8886-e4a049d7ff8f",
                  "username": "matti"
                }
              }
            },
            {
              "node": {
                "id": "bbe42984-051b-4a01-b45d-b8d29c32200c.jaredpalmer.formik",
                "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
                "rating": 95,
                "createdAt": "2022-12-07T09:35:37.618Z",
                "user": {
                  "id": "bbe42984-051b-4a01-b45d-b8d29c32200c",
                  "username": "kalle"
                }
              }
            }
          ]
        }
      }
    }
  }

  return (
    <View>
      <Text>ReviewsList</Text>
    </View>
  )
}

export default ReviewsList