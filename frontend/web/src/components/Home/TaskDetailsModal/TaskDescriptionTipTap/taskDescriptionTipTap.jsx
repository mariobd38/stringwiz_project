import React, { useEffect, useRef } from 'react';

import dayjs from 'dayjs';

import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import Placeholder from '@tiptap/extension-placeholder';

import { UpdateTaskInfo } from '../../../../DataManagement/Tasks/updateTask';

import './taskDescriptionTipTap.css'

const TaskDescriptionTipTap = (props) => {
    const {content, currentIndex,taskType,setTaskType,selectedDate,setCurrentTaskDueDate,setCurrentTaskDueDateTime,
        completedTasks
    } = props;

    const taskTypeRef = useRef(taskType);
     const currentIndexRef = useRef(currentIndex);
    useEffect(() => {
        taskTypeRef.current = taskType;
        currentIndexRef.current = currentIndex;
    }, [taskType,currentIndex]);

    const editor = useEditor({
        extensions: [
          StarterKit,
          Underline,
          Link,
          Superscript,
          SubScript,
          Highlight.configure({ multicolor: true }),
          TextAlign.configure({ types: ['heading', 'paragraph'] }),
          Placeholder.configure(
            { placeholder: "Write your task description"  }),
        ],
        content,
        onUpdate(props) {
            const description = props.editor.getHTML();
            UpdateTaskInfo(
                currentIndexRef.current, 
                "description",
                taskTypeRef.current,
                setTaskType,
                selectedDate,
                dayjs,
                setCurrentTaskDueDate,
                setCurrentTaskDueDateTime,
                completedTasks,
                description
            );
            
        }
      });

      useEffect(() => {
        editor?.commands.setContent(content || "", false, {
            preserveWhitespace: true,
        });
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content]);

    return (
        <div className="rich-text-editor-wrapper">
            <RichTextEditor editor={editor}
            style={{borderRadius: "8px"}} className='user-home-task-details-rte'>
                <RichTextEditor.Toolbar sticky className='user-home-task-details-modal-rte-toolbar ' >
                    <RichTextEditor.ControlsGroup className='user-home-task-details-modal-rte-controls-group'>
                        {/* <RichTextEditor.Bold /> */}
                        {/* <RichTextEditor.Italic />
                        <RichTextEditor.Underline /> */}
                        <RichTextEditor.Strikethrough />
                        <RichTextEditor.ClearFormatting />
                        <RichTextEditor.Highlight />
                        <RichTextEditor.Code />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup className='user-home-task-details-modal-rte-controls-group'>
                    <RichTextEditor.H1 />
                    <RichTextEditor.H2 />
                    <RichTextEditor.H3 />
                    <RichTextEditor.H4 />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup className='user-home-task-details-modal-rte-controls-group'>
                    <RichTextEditor.Blockquote />
                    {/* <RichTextEditor.Hr /> */}
                    {/* <RichTextEditor.OrderedList /> */}
                    <RichTextEditor.Subscript />
                    <RichTextEditor.Superscript />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup className='user-home-task-details-modal-rte-controls-group'>
                    <RichTextEditor.Link />
                    <RichTextEditor.Unlink />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup className='user-home-task-details-modal-rte-controls-group'>
                    <RichTextEditor.AlignLeft />
                    <RichTextEditor.AlignCenter />
                    <RichTextEditor.AlignJustify />
                    <RichTextEditor.AlignRight />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup className='user-home-task-details-modal-rte-controls-group'>
                    <RichTextEditor.Undo />
                    <RichTextEditor.Redo />
                    </RichTextEditor.ControlsGroup>
                </RichTextEditor.Toolbar>

                <RichTextEditor.Content bg='#222325' content={content}
                className='user-home-task-details-modal-rte-content'
                />
            </RichTextEditor>
        </div>
    );
};

export default TaskDescriptionTipTap;