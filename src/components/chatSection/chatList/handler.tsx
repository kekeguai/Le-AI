import React from "react";
import { useTranslations } from "next-intl";
import { Button, Confirm, Tooltip } from "@ltopx/lx-ui";
import Icon from "@/components/icon";
import CopyIcon from "@/components/site/copyIcon";

interface HandlerProps {
  content: string;
  onDelete: () => void;
  onRegenerate: () => void;
  onEdit: () => void;
}

export default function Handler({
  content,
  onDelete,
  onRegenerate,
  onEdit,
}: HandlerProps) {
  const tChat = useTranslations("chat");
  const tGlobal = useTranslations("global");

  return (
    <>
      <div className="flex opacity-0 transition-opacity gap-1.5 group-hover:opacity-100">
        <Tooltip title={tGlobal("copy")}>
          <Button className="h-6 px-2" type="primary" outline size="sm" rounded>
            <CopyIcon size={16} content={content} />
          </Button>
        </Tooltip>
        <Tooltip title={tChat("edit-content")}>
          <Button
            className="h-6 px-2"
            type="primary"
            outline
            size="sm"
            rounded
            onClick={onEdit}
          >
            <Icon icon="pencil_line" size={16} />
          </Button>
        </Tooltip>

        <Confirm
          title={tChat("delete-chat")}
          content={tChat("delete-chat-tip")}
          onOk={onDelete}
          okText={tGlobal("ok-spacing")}
          cancelText={tGlobal("cancel-spacing")}
          type="danger"
        >
          <Tooltip title={tChat("delete-chat")}>
            <Button
              className="h-6 px-2"
              type="primary"
              size="sm"
              outline
              rounded
            >
              <Icon icon="delete_2_line" size={16} />
            </Button>
          </Tooltip>
        </Confirm>
        <Tooltip title={tGlobal("retry")}>
          <Button
            className="h-6 px-2"
            type="primary"
            outline
            size="sm"
            rounded
            onClick={onRegenerate}
          >
            <Icon icon="refresh_3_line" size={16} />
          </Button>
        </Tooltip>
      </div>
    </>
  );
}
