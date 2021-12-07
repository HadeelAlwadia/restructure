import { memo, useEffect } from "react";

import { Col, Input } from "antd";
import _toNumber from "lodash/toNumber";
import { useTranslation } from "@app/components/features/settings/screens/UsersScreen/components/UserRoleModal/UserRoleModal";

import { Item, useForm } from "@app/components/Form/Form";
import FormModal from "@app/components/FormModal/FormModal";
import { ItemModalEnum } from "@app/utils/constants/route.constants";
import { isValidUserId, UserDef } from "@app/components/features/settings/settings";
import useShowModal from "@app/hooks/useShowModal";

export const ENTRY_TYPE_USER_ROLE = "user-role";

interface UserRoleModalProps {
  onClose: () => void;
  onSubmitted: () => void;
}

const UserRoleModal = memo(({ onClose, onSubmitted }: UserRoleModalProps) => {
  const { t } = useTranslation();
  const { showModal, action, entryId } = useShowModal({
    customEntryType: ENTRY_TYPE_USER_ROLE,
  });
  const [form] = useForm();

  // Constants
  const userId = _toNumber(entryId);
  const editMode = action === ItemModalEnum.EDIT;

  // TODO: Get User from API
  useEffect(() => {
    if (showModal) {
      if (editMode && isValidUserId(userId)) {
        // eslint-disable-next-line no-console
        console.log("user id", userId);
      }
    }
  }, [userId, editMode, showModal]);

  const handleClose = () => {
    onClose();
  };

  const handleFinish = (values: Partial<UserDef>) => {
    // TODO: Update user role
    // eslint-disable-next-line no-console
    console.log(values);
    onSubmitted();
  };

  return (
    <FormModal
      title={t("settingsUsers.editUserRole")}
      visible={showModal}
      onClose={handleClose}
      onFinish={handleFinish}
      form={form}
    >
      <Col span={24}>
        <Item name="role" label="User Role">
          <Input type="text" />
        </Item>
      </Col>
    </FormModal>
  );
});

export default UserRoleModal;
