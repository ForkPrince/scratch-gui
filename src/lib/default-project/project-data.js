import {defineMessages} from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    meow: {
        defaultMessage: 'Meow',
        description: 'Name for the meow sound',
        id: 'gui.defaultProject.meow'
    },
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    },
    comment_1: {
        defaultMessage: 'Thanks for using ServerSMP!\n- Load from localhost:3000\n- Hidden blocks\n- New extensions',
        description: 'ServerSMP comment',
        id: 'gui.defaultProject.comment_1'
    }
});

messages = {...messages, ...sharedMessages};

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [{
            isStage: true,
            name: 'Stage',
            variables: {
                '`jEk@4|i[#Fk?(8x)AV.-my variable': [
                    translator(messages.variable),
                    0
                ]
            },
            lists: {},
            broadcasts: {},
            blocks: {},
            comments: {},
            currentCostume: 0,
            costumes: [{
                name: translator(messages.backdrop, {index: 1}),
                bitmapResolution: 1,
                dataFormat: 'svg',
                assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                rotationCenterX: 0,
                rotationCenterY: 0
            }],
            sounds: [{
                name: translator(messages.pop),
                assetId: '83a9787d4cb6f3b7632b4ddfebf74367',
                dataFormat: 'wav',
                format: '',
                rate: 48000,
                sampleCount: 1124,
                md5ext: '83a9787d4cb6f3b7632b4ddfebf74367.wav'
            }],
            volume: 100,
            layerOrder: 0,
            tempo: 60,
            videoTransparency: 50,
            videoState: 'on',
            textToSpeechLanguage: null
        }, {
            isStage: false,
            name: translator(messages.sprite, {index: 1}),
            variables: {},
            lists: {},
            broadcasts: {},
            blocks: {
                a: {
                    opcode: 'argument_reporter_boolean',
                    next: null,
                    parent: null,
                    inputs: {},
                    fields: {
                        VALUE: ['is forkphorus?', null]
                    },
                    shadow: false,
                    topLevel: true,
                    x: 43,
                    y: 616
                },
                b: {
                    opcode: 'argument_reporter_boolean',
                    next: null,
                    parent: null,
                    inputs: {},
                    fields: {
                        VALUE: ['is TurboWarp?', null]
                    },
                    shadow: false,
                    topLevel: true,
                    x: 226,
                    y: 616
                },
                c: {
                    opcode: 'argument_reporter_boolean',
                    next: null,
                    parent: null,
                    inputs: {},
                    fields: {
                        VALUE: ['is compiled?', null]
                    },
                    shadow: false,
                    topLevel: true,
                    x: -133,
                    y: 613
                }
            },
            comments: {
                f: {
                    blockId: null,
                    x: -69,
                    y: 305,
                    width: 377,
                    height: 244,
                    minimized: false,
                    text: translator(messages.comment_1)
                }
            },
            currentCostume: 0,
            costumes: [{
                name: 'welcome',
                bitmapResolution: 1,
                dataFormat: 'svg',
                assetId: 'f083ba67427a2da8d308a8a2e6ac7626',
                md5ext: 'f083ba67427a2da8d308a8a2e6ac7626.svg',
                rotationCenterX: 191.69610845721985,
                rotationCenterY: 143.57681313291286
            }],
            sounds: [{
                name: translator(messages.pop),
                assetId: '83a9787d4cb6f3b7632b4ddfebf74367',
                dataFormat: 'wav',
                format: '',
                rate: 48000,
                sampleCount: 1124,
                md5ext: '83a9787d4cb6f3b7632b4ddfebf74367.wav'
            }],
            volume: 100,
            layerOrder: 1,
            visible: true,
            x: 0,
            y: 0,
            size: 100,
            direction: 90,
            draggable: false,
            rotationStyle: 'all around'
        }],
        monitors: [],
        extensions: [],
        meta: {
            semver: '3.0.0',
            vm: '0.2.0',
            agent: ''
        }
    });
};


export default projectData;
