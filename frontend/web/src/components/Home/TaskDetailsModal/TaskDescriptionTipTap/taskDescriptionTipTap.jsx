import React, { useEffect, useRef, useState } from 'react';


import { Menu,Box } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { RichTextEditor } from '@mantine/tiptap';

import {Icons} from '../../../icons/icons';
import { useScrollLock } from '../../../../utils/useScrollLock';
import { GetEditor } from './customEditor';

import './taskDescriptionTipTap.css'

const TaskDescriptionTipTap = (props) => {
    const {content, currentIndex,taskType,setTaskType,handleTaskUpdateNew,setNewTaskDescription
    } = props;

    const taskTypeRef = useRef(taskType);
    const currentIndexRef = useRef(currentIndex);
    const [menuOpened, setMenuOpened] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    const editorRef = useRef(null);
    const ref = useClickOutside(() => {enableScroll(); setMenuOpened(false);});

    const { disableScroll, enableScroll } = useScrollLock(); 

    useEffect(() => {
        taskTypeRef.current = taskType;
        currentIndexRef.current = currentIndex;
    }, [taskType,currentIndex]);


    const editor = GetEditor({
        content, 
        currentIndexRef, 
        taskTypeRef, 
        setTaskType, 
        handleTaskUpdateNew,
        setNewTaskDescription
    });

    useEffect(() => {
        editor?.commands.setContent(content || "", false, {
            preserveWhitespace: true,
        });
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content]);



    const handleChange = (e) => {
        const currentLine = getCurrentLine();
        if (currentLine) {
            const textContent = currentLine.textContent.trim();
            if (textContent === "/") {
            const rect = currentLine.getBoundingClientRect();
            const editorRect = editorRef.current.getBoundingClientRect();
            const topInc = handleTaskUpdateNew ? 0 : 70;
            const leftInc = handleTaskUpdateNew ? 15 : 21.5;

            const left = (rect.left + leftInc) - editorRect.left;

            const shouldPositionAbove = rect.top < 460;

            const top = shouldPositionAbove ? rect.top - topInc : rect.top - (350 + topInc);

            setMenuPosition({
                top,
                left,
                placement: shouldPositionAbove ? 'above' : 'below'
            });
            setMenuOpened(true);
            disableScroll();
            } else {
                setMenuOpened(false);
                enableScroll();
            }
        }
    }

    const getCurrentLine = () => {
        const selection = window.getSelection();
        const anchorNode = selection.anchorNode;
        
        let currentLine = anchorNode;
        while (currentLine && currentLine.nodeType !== Node.ELEMENT_NODE) {
            currentLine = currentLine.parentElement;
        }
        return currentLine;
    }
    // console.log(window.getSelection().toString());
    
    const menuItems = [
        { label: 'Paragraph', icon: 'IconClearFormatting', 
            command: <span className='rte-styles-options-menu-item'>{Icons('IconCommand',22,24)}{Icons('IconAlt',30,24)}{Icons('IconNumber0',22,24)}</span>, 
            action: () => {editor.chain().focus(); editor.commands.setParagraph();} },
        { label: 'Heading 1', icon: 'IconH1', 
            command: <span className='rte-styles-options-menu-item'>{Icons('IconCommand',22,24)}{Icons('IconAlt',30,24)}{Icons('IconNumber1',22,24)}</span>, 
            action: () => editor.chain().focus().toggleHeading({ level: 1 }).run() },
        { label: 'Heading 2', icon: 'IconH2', 
            command: <span className='rte-styles-options-menu-item'>{Icons('IconCommand',22,24)}{Icons('IconAlt',30,24)}{Icons('IconNumber2',22,24)}</span>, 
            action: () => editor.chain().focus().toggleHeading({ level: 2 }).run() },
        { label: 'Heading 3', icon: 'IconH3', 
            command: <span className='rte-styles-options-menu-item'>{Icons('IconCommand',22,24)}{Icons('IconAlt',30,24)}{Icons('IconNumber3',22,24)}</span>, 
            action: () => editor.chain().focus().toggleHeading({ level: 3 }).run() },
        { label: 'Blockquote', icon: 'IconQuote', 
            command: <span className='rte-styles-options-menu-item' >{Icons('IconCommand',22,24)}{Icons('IconArrowBigUp',22,24)}{Icons('IconLetterB',22,24)}</span>, 
            action: () => editor.chain().focus().toggleBlockquote().run() },
        { label: 'Ordered list', icon: 'IconListNumbers', 
            command: <span className='rte-styles-options-menu-item' >{Icons('IconCommand',20,24)}{Icons('IconArrowBigUp',22,24)}{Icons('IconNumber7',22,24)}</span>,
            action: () => {editor.chain().focus(); !editor.isActive('orderedList') && editor.chain().focus().toggleOrderedList().run();} },
        { label: 'Bulleted list', icon: 'IconList', 
            command: <span className='rte-styles-options-menu-item' >{Icons('IconCommand',22,24)}{Icons('IconArrowBigUp',20,24)}{Icons('IconNumber8',20,24)}</span>,
            action: () => {editor.chain().focus(); !editor.isActive('bulletList') && editor.chain().focus().toggleBulletList().run();} },
        { label: 'Checklist', icon: 'IconListCheck', 
            command: <span className='rte-styles-options-menu-item' >{Icons('IconCommand',22,24)}{Icons('IconArrowBigUp',22,24)}{Icons('IconNumber9',22,24)}</span>,
            action: () => {editor.chain().focus(); !editor.isActive('taskList') && editor.chain().focus().toggleTaskList().run(); } },
        { label: 'Code block', icon: 'IconCode', 
            command: <span className='rte-styles-options-menu-item' >{Icons('IconCommand',22,24)}{Icons('IconAlt',22,24)}{Icons('IconLetterC',22,24)}</span>,
            action: () => {editor.chain().focus().toggleCodeBlock().run();} },
        { label: 'Divider', icon: 'IconSeparatorHorizontal', 
            command: <span className='rte-styles-options-menu-item'>{Icons('IconCommand',22,24)}{Icons('IconArrowBigUp',22,24)}{Icons('IconMinus',22,24)}</span>, 
            action: () => {editor.commands.setHorizontalRule();} },
    ];

    return (
        <>
        <div className="rich-text-editor-wrapper" ref={editorRef} >
            <RichTextEditor editor={editor} onInput={handleChange}
            style={{borderRadius: "8px", border: `${handleTaskUpdateNew && '1.5px solid #47494d'}`}} className='rte'>

                <RichTextEditor.Content bg={`${handleTaskUpdateNew ? '#222325' : 'transparent'}`} content={content}className='rte-content' />
                {handleTaskUpdateNew &&
                <RichTextEditor.Toolbar sticky className='rte-toolbar' >
                    <RichTextEditor.ControlsGroup className='rte-controls-group'>
                        {/* <RichTextEditor.Bold /> */}
                        {/* <RichTextEditor.Italic />
                        <RichTextEditor.Underline /> */}
                        <RichTextEditor.Strikethrough />
                        <RichTextEditor.ClearFormatting />
                        <RichTextEditor.Highlight />
                        <RichTextEditor.Code />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup className='rte-controls-group'>
                    {/* <RichTextEditor.H1 /> */}
                    {/* <RichTextEditor.H2 /> */}
                    {/* <RichTextEditor.H3 /> */}
                    {/* <RichTextEditor.H4 /> */}
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup className='rte-controls-group'>
                    <RichTextEditor.Blockquote />
                    {/* <RichTextEditor.Hr /> */}
                    {/* <RichTextEditor.OrderedList /> */}
                    <RichTextEditor.Subscript />
                    <RichTextEditor.Superscript />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup className='rte-controls-group'>
                    <RichTextEditor.Link />
                    <RichTextEditor.Unlink />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup className='rte-controls-group'>
                    <RichTextEditor.AlignLeft />
                    <RichTextEditor.AlignCenter />
                    <RichTextEditor.AlignJustify />
                    <RichTextEditor.AlignRight />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup className='rte-controls-group'>
                    <RichTextEditor.Undo />
                    <RichTextEditor.Redo />
                    </RichTextEditor.ControlsGroup>
                </RichTextEditor.Toolbar>}
                {menuOpened && (
                    <Box 
                    bg='#28292b'
                    w='270px'
                    ref={ref}
                    style={{ 
                        borderRadius: "7px", 
                        position: 'absolute', 
                        top: `${menuPosition.top}px`,
                        left: `${menuPosition.left}px`,
                        zIndex: 1000,
                        pointerEvents: "auto",
                    }}
                >
                    <Menu
                        closeOnClickOutside={true}
                        opened={menuOpened}
                        onClose={() => {setMenuOpened(false); enableScroll();}}
                        withinPortal
                    >
                        <div className='tip-tap-format p-2' 
                            style={{boxShadow: "0 14px 38px rgba(0, 0, 0, 0.35)", maxHeight: "300px", overflow: "auto"}}
                        >
                            <Menu.Label ps={7} c='#8a929a' fz='13'>Formatting</Menu.Label>
                            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                                {menuItems.map((item, index) => (
                                    <div key={index} style={{ width: '100%' }} className='me-1'>
                                        <Menu.Item 
                                            className='rte-styles-options-button pe-2'
                                            key={index}
                                            w='92%' 
                                            style={{borderRadius: "6px"}}
                                            bg='#28292b' 
                                            c='#eaebed'
                                            onClick={(e) => {
                                                item.action();
                                                setMenuOpened(false);
                                            }}
                                            // leftSection={<item.icon style={{ width: '18px' }} />}
                                            leftSection={Icons(item.icon,18,18)}
                                            rightSection={item.command}
                                        >
                                            <div className='d-flex gap-3 align-items-center me-3'>
                                                <div />
                                                <span className='fafafa-color d-flex'>{item.label}</span>
                                            </div>
                                        </Menu.Item>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Menu>
                </Box>
                )}
            </RichTextEditor>
        </div>
        </>
    );
};

export default TaskDescriptionTipTap;